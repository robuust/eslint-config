# @robuust-digital/eslint-config

Shared Robuust ESLint flat config with stylistic defaults, implemented via `@stylistic/eslint-plugin`.

See [CHANGELOG.md](./CHANGELOG.md) for release history.

## Install

```bash
yarn add -D eslint @robuust-digital/eslint-config
```

Requires ESLint 10 or later. TypeScript projects require TypeScript `>=5.3.0 <6.1.0`.
Type declarations are included for all config exports.

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

## Import ordering and config arrays

The base config enforces `import-x/order` in JavaScript, TypeScript, and Vue files,
using the groups `builtin`, `external`, `parent`, `sibling`, and `index`.
TypeScript and Vue files still require their respective addons for parsing.
`eslint-plugin-import-x` is included by this package.

In `*.config.{js,mjs,cjs,ts,mts,cts}` files, arrays with two or more elements
use one element per line. This includes Nuxt, Vite, Vitest, and ESLint configs. This applies to all element types, not just strings.
Array formatting in other files is unchanged. Both conventions support ESLint
`--fix`; import ordering preserves side-effect import boundaries.

When upgrading from 0.5.x, update the package range to `^0.6.0` and refresh the
lockfile. Remove redundant local `import/order` or `import-x/order` settings.
Keep project-specific resolution, extension, and dependency checks locally,
including their plugin registration and direct dependency when still used.
