import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (relativePath) => readFile(path.join(root, relativePath), 'utf8');

async function collectTextFiles(directory) {
  const entries = await readdir(path.join(root, directory), { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectTextFiles(relative));
    } else if (/\.(astro|css|js|mjs|ts|txt|xml|json|md)$/.test(entry.name)) {
      files.push(relative);
    }
  }
  return files;
}

test('navigation, keyboard and metadata baseline remains present', async () => {
  const layout = await read('src/layouts/BaseLayout.astro');
  const accessibility = await read('src/styles/accessibility.css');
  const global = await read('src/styles/global.css');

  assert.match(layout, /class="skip-link" href="#main-content"/);
  assert.match(layout, /aria-label="Primary navigation"/);
  assert.match(layout, /aria-current=\{path === item\.href \? 'page' : undefined\}/);
  assert.match(layout, /rel="canonical"/);
  assert.match(layout, /property="og:title"/);
  assert.match(layout, /name="twitter:card"/);
  assert.match(accessibility, /\.skip-link:focus/);
  assert.match(global, /:focus-visible/);
  assert.match(global, /prefers-reduced-motion: reduce/);
});

test('commission intake is bounded, explicit and local-only', async () => {
  const contact = await read('src/pages/contact.astro');

  assert.match(contact, /name="projectType" required/);
  assert.match(contact, /name="outcome"[\s\S]*maxlength="1200"[\s\S]*required/);
  assert.match(contact, /role="status" aria-live="polite"/);
  assert.match(contact, /Nothing is sent when you press this button/);
  assert.match(contact, /mailto:support@blacklinedevelopment\.uk/);
  assert.match(contact, /Passwords, API keys, access tokens, card\/bank information/);
  assert.doesNotMatch(contact, /<input[^>]+type=["']file["']/i);
  assert.doesNotMatch(contact, /\bfetch\s*\(/);
  assert.doesNotMatch(contact, /localStorage|sessionStorage|indexedDB/i);
});

test('responsive, crawl and deliberate error surfaces remain present', async () => {
  const global = await read('src/styles/global.css');
  const intake = await read('src/styles/intake.css');
  const notFound = await read('src/pages/404.astro');
  const robots = await read('public/robots.txt');
  const sitemap = await read('public/sitemap.xml');

  assert.match(global, /@media \(max-width: 860px\)/);
  assert.match(global, /@media \(max-width: 620px\)/);
  assert.match(intake, /@media \(max-width: 860px\)/);
  assert.match(notFound, /Page not found/);
  assert.match(notFound, /Back to home/);
  assert.match(robots, /Sitemap: https:\/\/blacklinedevelopment\.uk\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/blacklinedevelopment\.uk\/contact/);
});

test('public source contains no known analytics hooks or obvious committed secrets', async () => {
  const files = [
    ...await collectTextFiles('src'),
    ...await collectTextFiles('public'),
  ];

  const contents = (await Promise.all(files.map(async (file) => [file, await read(file)])));
  const analyticsPattern = /google-analytics|googletagmanager|\bgtag\s*\(|plausible\.io|posthog|mixpanel|segment\.com/i;
  const secretPattern = /sk_(?:live|test)_[A-Za-z0-9]{12,}|ghp_[A-Za-z0-9]{20,}|AIza[0-9A-Za-z_-]{20,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/;

  for (const [file, content] of contents) {
    assert.doesNotMatch(content, analyticsPattern, `unexpected analytics hook in ${file}`);
    assert.doesNotMatch(content, secretPattern, `possible committed secret in ${file}`);
  }
});
