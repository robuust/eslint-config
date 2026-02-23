import vue from 'eslint-plugin-vue';
import vuejsAccessibility from 'eslint-plugin-vuejs-accessibility';

export default [
  ...vue.configs['flat/recommended'],
  ...vuejsAccessibility.configs['flat/recommended'],
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
