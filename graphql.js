import graphql from '@graphql-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.{graphql,gql}'],
    languageOptions: {
      parser: graphql.parser,
    },
    plugins: {
      '@graphql-eslint': graphql,
    },
    rules: {
      '@graphql-eslint/no-anonymous-operations': 'error',
      '@graphql-eslint/no-duplicate-fields': 'error',
    },
  },
];
