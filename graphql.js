import graphql from '@graphql-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{graphql,gql}'],
    languageOptions: {
      parser: graphql.parser,
    },
    plugins: {
      '@graphql-eslint': graphql,
      prettier,
    },
    rules: {
      '@graphql-eslint/no-anonymous-operations': 'error',
      '@graphql-eslint/no-duplicate-fields': 'error',
      'prettier/prettier': ['error', {
        parser: 'graphql',
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
      }],
    },
  },
];
