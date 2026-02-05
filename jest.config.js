module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    // whitelist all ESM packages that Jest cannot handle
    'node_modules/(?!react-native|@react-native|react-native-reanimated|@react-navigation|react-redux|@reduxjs/toolkit|immer)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
