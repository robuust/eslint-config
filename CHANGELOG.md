# Changelog

All notable changes to this project will be documented in this file.

## 0.5.0 - 2026-05-20

### Added

- Added the `@robuust-digital/eslint-config/typescript` export for syntax-only TypeScript linting.
- Added `typescript-eslint` recommended flat config support for `**/*.{ts,tsx,mts,cts}` files.
- Added TypeScript parser handoff for Vue SFC script blocks when the TypeScript addon is combined with the Vue addon.
- Added `typescript` as an optional peer dependency for TypeScript consumers.

### Changed

- Applied the shared Robuust stylistic rules to TypeScript files.
- Disabled `no-undef` for TypeScript files so TypeScript handles undefined symbols.
- Documented JavaScript-only, JavaScript + TypeScript, and JavaScript + TypeScript + Vue usage.

## 0.4.0 - 2026-04-29

### Added

- Exported the shared stylistic rule set so the Vue addon can reuse the same formatting contract.

### Changed

- Applied the shared stylistic rules to `**/*.vue` files in `@robuust-digital/eslint-config/vue`.
- Enforced semicolons, trailing commas, indentation, key spacing, and import spacing in Vue script blocks.

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
