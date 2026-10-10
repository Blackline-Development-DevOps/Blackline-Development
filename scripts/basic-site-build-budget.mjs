/* global process, console */
import assert from 'node:assert/strict';
import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const files = [];
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const pathname = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(pathname);
    else if (entry.isFile()) {
      const details = await stat(pathname);
      files.push({ name: path.relative(root, pathname).replaceAll(path.sep, '/'), bytes: details.size });
    }
  }
}
await walk(root);
const total = files.reduce((sum, file) => sum + file.bytes, 0);
const largest = [...files].sort((a, b) => b.bytes - a.bytes).slice(0, 15);
const report = {
  schemaVersion: 1,
  source: 'actual Astro dist output',
  files: files.length,
  totalBytes: total,
  budgetBytes: 25 * 1024 * 1024,
  singleAssetBudgetBytes: 5 * 1024 * 1024,
  largest,
  oversized: files.filter(file => file.bytes > 5 * 1024 * 1024),
  passed: total <= 25 * 1024 * 1024 && files.every(file => file.bytes <= 5 * 1024 * 1024)
};
if (process.env.BUILD_EVIDENCE_PATH) await writeFile(process.env.BUILD_EVIDENCE_PATH, JSON.stringify(report, null, 2));
console.log(JSON.stringify({ totalBytes: total, fileCount: files.length, passed: report.passed, largest: largest.slice(0, 3) }));
assert.ok(report.passed, 'Built-site asset budget exceeded; inspect build budget evidence');
