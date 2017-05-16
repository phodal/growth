/* global jest fetch */

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
