import { NativeModules } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SplashScreen from 'react-native-splash-screen';
import Growth from '../src/index';


describe('test index', () => {
  beforeEach(() => {
    NativeModules.SplashScreen = { hide: jest.fn() };
  });

  it('renders correctly', () => {
    const spy = jest.spyOn(SplashScreen, 'hide');
    const tree = renderer.create(
      <Growth />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
    expect(spy).toHaveBeCalled();
  });

});
