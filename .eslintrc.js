module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    indent: ['error', 2],
    'import/no-unresolved': ['error', { ignore: ['@/'] }],
    'import/no-unresolved': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'import/extensions': 0,
    'prefer-template': 0,
    'max-len': ['error', { code: 120 }],
    'class-methods-use-this': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
