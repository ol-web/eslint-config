/** @type {import("eslint").Linter.Config}  */
const vue = {
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/eslint-config-typescript/recommended', 'prettier'],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/no-v-html': 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always', // prettier
          normal: 'always',
          component: 'always',
        },
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/prefer-true-attribute-shorthand': ['warn', 'always'],
    'vue/component-tags-order': [
      'warn',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'import/newline-after-import': ['warn', { count: 1 }],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
  },
};

module.exports = vue;
