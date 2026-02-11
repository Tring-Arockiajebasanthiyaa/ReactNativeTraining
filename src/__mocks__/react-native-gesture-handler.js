// __mocks__/react-native-gesture-handler.js
module.exports = {
  Swipeable: jest.fn().mockImplementation(({ children }) => children),
  DrawerLayout: jest.fn().mockImplementation(({ children }) => children),
  State: {},
  Directions: {},
  TouchableOpacity: jest.fn().mockImplementation(({ children }) => children),
  GestureHandlerRootView: jest.fn().mockImplementation(({ children }) => children),
  PanGestureHandler: jest.fn().mockImplementation(({ children }) => children),
  LongPressGestureHandler: jest.fn().mockImplementation(({ children }) => children),
  TapGestureHandler: jest.fn().mockImplementation(({ children }) => children),
  FlingGestureHandler: jest.fn().mockImplementation(({ children }) => children),
};
