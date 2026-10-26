import assert from 'node:assert/strict';
import test from 'node:test';
import { ESLint } from 'eslint';

import base from '@robuust-digital/eslint-config';
import graphql from '@robuust-digital/eslint-config/graphql';
import typescript from '@robuust-digital/eslint-config/typescript';
import vue from '@robuust-digital/eslint-config/vue';

const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: [...base, ...typescript, ...vue, ...graphql],
});

for (const extension of ['graphql', 'gql']) {
  test(`lints .${extension} operations without a schema alongside all addons`, async () => {
    const [result] = await eslint.lintText('query Example {\n  hello\n}\n', {
      filePath: `Example.${extension}`,
    });

    assert.deepEqual(result.messages, []);
  });
}

test('requires named operations', async () => {
  const [result] = await eslint.lintText('{\n  hello\n}\n', {
    filePath: 'Anonymous.graphql',
  });

  assert.ok(result.messages.some((message) => (
    message.ruleId === '@graphql-eslint/no-anonymous-operations'
  )));
});

for (const [kind, source] of [
  ['fields', 'query Duplicate {\n  hello\n  hello\n}\n'],
  ['arguments', 'query Duplicate {\n  hello(id: 1, id: 2)\n}\n'],
  ['variables', 'query Duplicate($id: ID!, $id: ID!) {\n  hello(id: $id)\n}\n'],
]) {
  test(`rejects duplicate ${kind}`, async () => {
    const [result] = await eslint.lintText(source, {
      filePath: 'Duplicate.graphql',
    });

    assert.ok(result.messages.some((message) => (
      message.ruleId === '@graphql-eslint/no-duplicate-fields'
    )));
  });
}

test('allows distinct field aliases', async () => {
  const [result] = await eslint.lintText('query Aliases {\n  first: hello\n  second: hello\n}\n', {
    filePath: 'Aliases.graphql',
  });

  assert.deepEqual(result.messages, []);
});

test('reports invalid GraphQL syntax', async () => {
  const [result] = await eslint.lintText('query Invalid {\n', {
    filePath: 'Invalid.graphql',
  });

  assert.equal(result.fatalErrorCount, 1);
});

test('reports formatting and produces a stable autofix', async () => {
  const source = 'query Example{hello}';
  const [unformatted] = await eslint.lintText(source, { filePath: 'Example.graphql' });

  assert.ok(unformatted.messages.some((message) => message.ruleId === 'prettier/prettier'));

  const fixer = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [...base, ...graphql],
    fix: true,
  });
  const [formatted] = await fixer.lintText(source, { filePath: 'Example.graphql' });

  assert.equal(formatted.output, 'query Example {\n  hello\n}\n');
  assert.deepEqual(formatted.messages, []);

  const [repeated] = await fixer.lintText(formatted.output, { filePath: 'Example.graphql' });

  assert.equal(repeated.output, undefined);
  assert.deepEqual(repeated.messages, []);
});

for (const [filePath, source] of [
  ['example.js', 'const unused = 1;\n'],
  ['example.ts', 'const unused: number = 1;\n'],
  ['Example.vue', '<template>\n  <div>Hello</div>\n</template>\n<script setup>\nconst unused = 1;\n</script>\n'],
]) {
  test(`preserves existing lint results for ${filePath}`, async () => {
    const baseline = new ESLint({
      overrideConfigFile: true,
      overrideConfig: [...base, ...typescript, ...vue],
    });
    const [before] = await baseline.lintText(source, { filePath });
    const [after] = await eslint.lintText(source, { filePath });

    assert.ok(before.errorCount > 0);
    assert.deepEqual(after.messages, before.messages);
  });
}

test('keeps GraphQL opt-in', async () => {
  const baseline = new ESLint({
    overrideConfigFile: true,
    overrideConfig: base,
  });

  assert.equal(await baseline.isPathIgnored('Example.graphql'), true);
});
