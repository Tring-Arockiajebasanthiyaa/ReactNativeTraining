module.exports = {
  __esModule: true,
  default: {
    ...jest.requireActual('react-native-reanimated/mock'),
    call: () => {},
  },
};
