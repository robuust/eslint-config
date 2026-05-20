# @robuust-digital/eslint-config

Shared Robuust ESLint flat config with stylistic defaults, implemented via `@stylistic/eslint-plugin`.

See [CHANGELOG.md](./CHANGELOG.md) for release history.

## Install

```bash
yarn add -D eslint @robuust-digital/eslint-config
```

## Usage: JavaScript

Create `eslint.config.js`:

```js
import robuust from '@robuust-digital/eslint-config';

export default [
  {
    ignores: ['web/dist/**'],
  },
  ...robuust,
  {
    files: ['src/js/**/*.js'],
    rules: {
      // project-specific overrides
    },
  },
];
```

## Usage: JavaScript + TypeScript

For TypeScript projects, include the TypeScript addon after the base config:

```js
import robuust from '@robuust-digital/eslint-config';
import robuustTypeScript from '@robuust-digital/eslint-config/typescript';

export default [
  {
    ignores: ['dist/**', 'coverage/**'],
  },
  ...robuust,
  ...robuustTypeScript,
];
```

The TypeScript addon is syntax-only: it enables TypeScript parsing and recommended rules via `typescript-eslint`, but does not configure type-aware linting. When combined with the Vue addon, it also enables TypeScript parsing inside Vue SFC script blocks.

## Usage: JavaScript + TypeScript + Vue

For Vue projects, also include the Vue addon (Vue + Vue accessibility rules):

```js
import robuust from '@robuust-digital/eslint-config';
import robuustTypeScript from '@robuust-digital/eslint-config/typescript';
import robuustVue from '@robuust-digital/eslint-config/vue';

export default [
  {
    ignores: ['dist/**', 'coverage/**'],
  },
  ...robuust,
  ...robuustTypeScript,
  ...robuustVue,
];
```
