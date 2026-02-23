# @robuust-digital/eslint-config

Shared Robuust ESLint flat config with Airbnb-like stylistic defaults, implemented via `@stylistic/eslint-plugin`.

See [CHANGELOG.md](./CHANGELOG.md) for release history.

## Install

```bash
yarn add -D eslint @robuust-digital/eslint-config
```

## Usage

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

## Vue Addon

For Vue projects, also include the Vue addon (Vue + Vue accessibility rules):

```js
import robuust from '@robuust-digital/eslint-config';
import robuustVue from '@robuust-digital/eslint-config/vue';

export default [
  ...robuust,
  ...robuustVue,
];
```
