# @robuust-digital/eslint-config

Shared Robuust ESLint flat config with Airbnb-like stylistic defaults, implemented via `@stylistic/eslint-plugin`.

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
