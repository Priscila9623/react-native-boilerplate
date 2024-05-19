module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  bracketSameLine: false,
  bracketSpacing: true,
  tabWidth: 2,
  endOfLine: 'auto',
  printWidth: 120,
  semi: false,
  importOrder: [
    '^(react|react-native)$',
    '<THIRD_PARTY_MODULES>',
    '^@ui/(.*)$',
    '^@services/(.*)$',
    '^@config/(.*)$',
    '^@utils/(.*)$',
    '^@navigators/(.*)$',
    '^@screens/(.*)$',
    '^@assets/(.*)$',
    '^./(.*)$'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports']
}
