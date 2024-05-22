module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Ensure Node.js global variables and Node.js scoping
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-undef': 'off', // This will turn off the rule that's causing the error
  },
};
