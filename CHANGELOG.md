# Changelog

All notable changes to this project will be documented in this file.

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
