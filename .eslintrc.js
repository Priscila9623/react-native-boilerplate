module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['unused-imports', '@typescript-eslint/eslint-plugin'],
  rules: {
    semi: 0,
    'prettier/prettier': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'linebreak-style': 0,
    'no-restricted-syntax': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'unused-imports/no-unused-imports': 'error',
    'react/react-in-jsx-scope': 'off'
  }
}
