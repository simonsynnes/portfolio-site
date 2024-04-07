module.exports = {
  root: true,
  env: { browser: true, es2020: true, 'jest/globals': true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    '@tim-w-james',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jest', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-default-export': 'off',
  },
  settings: {
    jest: {
      version: 26,
    },
  }
}
