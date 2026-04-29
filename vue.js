import stylistic from '@stylistic/eslint-plugin';
import vue from 'eslint-plugin-vue';
import vuejsAccessibility from 'eslint-plugin-vuejs-accessibility';

import { stylisticRules } from './index.js';

const vueStylisticRules = {
  '@stylistic/comma-dangle': stylisticRules['@stylistic/comma-dangle'],
  '@stylistic/no-extra-semi': stylisticRules['@stylistic/no-extra-semi'],
  '@stylistic/no-multi-spaces': stylisticRules['@stylistic/no-multi-spaces'],
  '@stylistic/semi': stylisticRules['@stylistic/semi'],
  '@stylistic/semi-spacing': stylisticRules['@stylistic/semi-spacing'],
  '@stylistic/semi-style': stylisticRules['@stylistic/semi-style'],
};

export default [
  ...vue.configs['flat/recommended'],
  ...vuejsAccessibility.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: vueStylisticRules,
  },
  {
    rules: {
      'vue/max-len': 'off',
      'vue/no-v-html': 'off',
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/v-on-event-hyphenation': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/no-reserved-component-names': 'off',
      'vue/html-button-has-type': 'off',
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/no-setup-props-destructure': 'off',
      'vuejs-accessibility/label-has-for': 'off',
      'vuejs-accessibility/aria-unsupported-elements': 'off',
      'vuejs-accessibility/iframe-has-title': 'off',
      'vuejs-accessibility/form-control-has-label': 'off',
      'vuejs-accessibility/no-autofocus': 'off',
      'vuejs-accessibility/click-events-have-key-events': 'off',
      'vuejs-accessibility/anchor-has-content': 'off',
    },
  },
];
