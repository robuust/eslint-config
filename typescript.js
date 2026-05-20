import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

import { stylisticRules } from './index.js';

const typeScriptFiles = ['**/*.{ts,tsx,mts,cts}'];
const vueFiles = ['**/*.vue'];

export default [
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: typeScriptFiles,
  })),
  {
    files: typeScriptFiles,
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...stylisticRules,
      'no-undef': 'off',
    },
  },
  {
    files: vueFiles,
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
];
