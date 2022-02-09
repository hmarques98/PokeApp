const path = require('path')

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    '@testing-library/jest-native/extend-expect',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  clearMocks: true,
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  transform: {},
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
