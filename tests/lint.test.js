import assert from 'node:assert/strict';
import test from 'node:test';
import { ESLint } from 'eslint';
import base from '../index.js';
import typescript from '../typescript.js';
import vue from '../vue.js';

const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: [...base, ...typescript, ...vue],
  fix: true,
});

for (const filePath of ['example.js', 'example.ts', 'Example.vue']) {
  test(`orders imports and preserves compact arrays in ${filePath}`, async () => {
    const script = "import local from './local.js';\nimport fs from 'node:fs';\nexport const values = [fs, local];\n";
    const code = filePath.endsWith('.vue')
      ? `<script>\n${script}</script>\n`
      : script;
    const [result] = await eslint.lintText(code, { filePath });
    assert.equal(result.errorCount, 0, JSON.stringify(result.messages));
    assert.ok(result.output.indexOf("import fs") < result.output.indexOf("import local"));
    assert.ok(result.output.includes('[fs, local]'));
  });
}

for (const filePath of ['nuxt.config.js', 'nuxt.config.ts']) {
  test(`formats arrays in ${filePath} and produces stable output`, async () => {
    const code = "export default { css: ['a.css', 'b.css'], modules: ['one'], values: [1, 2] };\n";
    const [result] = await eslint.lintText(code, { filePath });
    assert.equal(result.errorCount, 0, JSON.stringify(result.messages));
    assert.match(result.output, /css: \[\n\s+'a.css',\n\s+'b.css',\n\s+\]/);
    assert.ok(result.output.includes("modules: ['one']"));
    assert.match(result.output, /values: \[\n\s+1,\n\s+2,\n\s+\]/);
    const [again] = await eslint.lintText(result.output, { filePath });
    assert.equal(again.errorCount, 0);
    assert.equal(again.output, undefined);
  });
}

test('preserves side-effect import order', async () => {
  const code = "import './first.css';\nimport './second.css';\n";
  const [result] = await eslint.lintText(code, { filePath: 'example.js' });
  assert.equal(result.errorCount, 0);
  assert.equal(result.output, undefined);
});
