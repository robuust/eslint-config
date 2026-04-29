# Changelog

All notable changes to this project will be documented in this file.

## 0.4.0 - 2026-04-29

### Added

- Exported the shared stylistic rule set so the Vue addon can reuse the same formatting contract.

### Changed

- Applied the shared stylistic rules to `**/*.vue` files in `@robuust-digital/eslint-config/vue`.
- Enforced semicolons, trailing commas, and single spacing inside import braces in Vue script blocks.

## 0.3.0 - 2026-02-23

### Added

- Integrated `eslint-plugin-vuejs-accessibility` into the Vue addon.
- Added accessibility recommended flat config to `@robuust-digital/eslint-config/vue`.

### Changed

- Moved Robuust Vue and accessibility rule overrides into the shared Vue addon.

## 0.2.0 - 2026-02-23

### Added

- Vue addon export at `@robuust-digital/eslint-config/vue`.
- `vue.js` preset with `eslint-plugin-vue` flat recommended config.

### Changed

- Added package dependencies required for Vue linting:
  - `eslint-plugin-vue`
  - `vue-eslint-parser`

## 0.1.0 - 2026-02-23

### Added

- Initial release of `@robuust-digital/eslint-config`.
- Base flat ESLint config with Airbnb-like stylistic rules via `@stylistic/eslint-plugin`.
