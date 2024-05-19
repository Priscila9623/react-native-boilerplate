const path = require('path')

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
          '@assets': path.resolve(__dirname, './app/assets'),
          '@config': path.resolve(__dirname, './app/config'),
          '@screens': path.resolve(__dirname, './app/screens'),
          '@services': path.resolve(__dirname, './app/services'),
          '@ui': path.resolve(__dirname, './app/ui'),
          '@utils': path.resolve(__dirname, './app/utils')
        }
      }
    ]
  ]
}
