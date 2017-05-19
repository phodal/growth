/* global jest fetch */

jest.mock('react-native-splash-screen', () => ({
  hide: jest.fn(),
}));

jest.mock('react-native-device-info', () => ({
  getVersion: jest.fn(),
}));

jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'));

jest.mock('Linking', () =>
  ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(
      () => new Promise(resolve => resolve(true)),
    ),
    getInitialURL: jest.fn(),
  }),
);
