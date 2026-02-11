// ================== MOCKS MUST BE FIRST, BEFORE ANY IMPORTS ==================

// Mock AsyncStorage first
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

// Mock TurboModuleRegistry before react-native
jest.mock('react-native/Libraries/TurboModule/TurboModuleRegistry', () => ({
  getEnforcing: jest.fn(() => null),
  get: jest.fn(() => null),
}));

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => ({
  Animated: {
    View: 'View',
    ScrollView: 'ScrollView',
  },
  useAnimatedStyle: jest.fn(() => ({})),
  useSharedValue: jest.fn(() => ({ value: 0 })),
}));

// Mock AppState - don't use requireActual to avoid importing react-native
jest.mock('react-native', () => ({
  AppState: {
    currentState: 'active',
    addEventListener: jest.fn(() => ({ remove: jest.fn() })),
  },
  View: 'View',
  Text: 'Text',
  ScrollView: 'ScrollView',
  FlatList: 'FlatList',
  StyleSheet: { create: jest.fn(x => x) },
  Button: 'Button',
  Image: 'Image',
  TextInput: 'TextInput',
  Platform: { OS: 'ios', select: jest.fn(x => x.ios) },
}));

// Mock Redux store
jest.mock('./src/store', () => ({
  store: {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
    subscribe: jest.fn(),
  },
}));

// Mock RootNavigator
jest.mock('./src/navigations/rootNavigator', () => jest.fn(() => null));

// Mock NavigationContainer
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }) => children,
}));

// Mock createStackNavigator
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: () => ({
    Navigator: ({ children }) => children,
    Screen: ({ children }) => children,
  }),
}));

jest.mock('react-native-gesture-handler', () => ({}));
jest.mock('react-native-screens', () => ({ enableScreens: jest.fn() }));
jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  return {
    SafeAreaProvider: ({ children }) => <>{children}</>,
    SafeAreaView: ({ children }) => <>{children}</>,
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  };
});

// ================== NOW IMPORT REACT NATIVE PACKAGES ==================
import 'react-native-gesture-handler/jestSetup';

// Mock AbortController for fetch tests
global.AbortController = class AbortController {
  constructor() {
    this.signal = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
      onabort: null,
    };
  }
  abort() {
    this.signal.dispatchEvent(new Event('abort'));
  }
};




