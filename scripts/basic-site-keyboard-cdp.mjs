/* global process, fetch, WebSocket, setTimeout, console */
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const endpoint = process.env.CHROME_DEBUG_URL || 'http://127.0.0.1:9222';
const base = process.env.SITE_URL || 'http://127.0.0.1:4173';
const output = process.env.KEYBOARD_EVIDENCE_PATH;
const targets = await (await fetch(endpoint + '/json/list')).json();
const page = targets.find(target => target.type === 'page');
assert.ok(page?.webSocketDebuggerUrl, 'Chrome page debugging target required');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { ws.addEventListener('open', resolve, { once: true }); ws.addEventListener('error', reject, { once: true }); });
let seq = 0;
const pending = new Map();
ws.addEventListener('message', event => {
  const message = JSON.parse(event.data);
  if (!message.id) return;
  const request = pending.get(message.id);
  if (!request) return;
  pending.delete(message.id);
  if (message.error) request.reject(Error(message.error.message));
  else request.resolve(message.result);
});
function send(method, params = {}) {
  const id = ++seq;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw Error(result.exceptionDetails.text);
  return result.result?.value;
}
async function key(key, code, keyCode, modifiers = 0) {
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key, code, windowsVirtualKeyCode: keyCode, nativeVirtualKeyCode: keyCode, modifiers });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key, code, windowsVirtualKeyCode: keyCode, nativeVirtualKeyCode: keyCode, modifiers });
}
const cases = [];
try {
  await send('Page.enable');
  await send('Runtime.enable');
  for (const width of [320, 1440]) for (const route of ['/', '/contact/']) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false });
    await send('Page.navigate', { url: base + route });
    for (let i = 0; i < 50; i++) {
      if (await evaluate('document.readyState === "complete" && !!document.querySelector("a.skip-link")')) break;
      await new Promise(resolve => setTimeout(resolve, 100));
      if (i === 49) throw Error('Page readiness timeout ' + route);
    }
    // Inspect Chromium's accessibility tree, rather than DOM attributes alone.
    const axTree = (await send('Accessibility.getFullAXTree')).nodes;
    const activeAx = axTree.filter(node => !node.ignored);
    const roleName = node => String(node.role?.value || '');
    const accessibleName = node => String(node.name?.value || '').trim();
    const landmarks = activeAx.filter(node => ['navigation', 'main', 'banner', 'contentinfo'].includes(roleName(node)));
    assert.ok(landmarks.some(node => roleName(node)==='navigation' && accessibleName(node)), 'Named navigation missing from accessibility tree: ' + route);
    assert.ok(landmarks.some(node => roleName(node)==='main'), 'Main landmark missing from accessibility tree: ' + route);
    const userInputs = activeAx.filter(node => ['textbox','combobox','listbox','checkbox','radio'].includes(roleName(node)));
    const unnamedInputs = userInputs.filter(node => !accessibleName(node)).map(node => ({ role: roleName(node), nodeId: node.nodeId }));
    assert.equal(unnamedInputs.length,0,'Unnamed interactive controls in accessibility tree: '+JSON.stringify(unnamedInputs));
    const axEvidence={landmarks:landmarks.map(node => ({role:roleName(node),name:accessibleName(node)})),namedInputCount:userInputs.length};
    await evaluate('document.activeElement?.blur(); document.body.focus(); true');
    const focus = [];
    for (let i = 0; i < 8; i++) {
      await key('Tab', 'Tab', 9);
      focus.push(await evaluate('({tag:document.activeElement?.tagName, label:(document.activeElement?.textContent||"").trim().slice(0,70), id:document.activeElement?.id||"", href:document.activeElement?.getAttribute("href")||""})'));
    }
    assert.equal(focus[0].href, '#main-content', 'First Tab should reach skip link: ' + route + ' ' + width);
    assert.ok(focus.some(value => value.tag === 'A' && value.href === '/'), 'Keyboard must reach primary navigation');
    await key('Tab', 'Tab', 9, 8); // Shift+Tab should reverse from current focus
    const reverse = await evaluate('({tag:document.activeElement?.tagName, href:document.activeElement?.getAttribute("href")||""})');
    assert.deepEqual(reverse, { tag: focus[6].tag, href: focus[6].href }, 'Shift+Tab must return to previous control');
    // Exercise the skip-link destination using browser keyboard input.
    await send('Page.navigate', { url: base + route });
    for(let i=0;i<50;i++){
      if(await evaluate('document.readyState==="complete" && !!document.querySelector(".skip-link")'))break;
      await new Promise(resolve=>setTimeout(resolve,100));
      if(i===49)throw Error('Skip-link navigation readiness timeout');
    }
    await key('Tab','Tab',9);
    const focusedSkip=await evaluate('document.activeElement?.getAttribute("href")==="#main-content"');
    assert.equal(focusedSkip,true,'Skip link was not focused before activation');
    await key('Enter','Enter',13);
    const skipDestination=await evaluate('({hash:location.hash,activeId:document.activeElement?.id||""})');
    assert.equal(skipDestination.hash,'#main-content','Skip link activation failed to navigate to main content');
    cases.push({ route, width, firstEight: focus, reverse, skipDestination, accessibilityTree: axEvidence, passed: true });
  }
  const report = { schemaVersion: 1, method: 'Chrome DevTools Protocol Input.dispatchKeyEvent', cases, passed: true, note: 'Trusted browser keyboard input plus Chromium accessibility-tree landmark/control names; not actual assistive-technology / screen-reader acceptance' };
  if (output) await writeFile(output, JSON.stringify(report, null, 2));
  console.log('Keyboard navigation passed ' + cases.length + ' viewport-route combinations');
} finally {
  ws.close();
}
