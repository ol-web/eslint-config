/** @type {import("eslint").Linter.Config}  */
const reactNative = {
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'import/newline-after-import': ['warn', { count: 1 }],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
        },
        pathGroups: [
          {
            pattern: '@/styles/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'ignore' }],
    'react/jsx-boolean-value': ['warn', 'never'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    '@typescript-eslint/no-empty-interface': 'off',
    'react/jsx-no-leaked-render': 'error',
  },
};

module.exports = reactNative;
