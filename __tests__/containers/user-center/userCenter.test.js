import { NativeModules } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DeviceInfo from 'react-native-device-info';

import UserCenter from '../../../src/containers/user-center/UserCenter';

describe('test user center', () => {
  beforeEach(() => {
    NativeModules.DeviceInfo = { getVersion: jest.fn() };
  });

  it('renders correctly', () => {
    const spy = jest.spyOn(DeviceInfo, 'getVersion');
    const tree = renderer.create(
      <UserCenter />,
    );

    const treeJson = tree.toJSON();
    expect(spy).toHaveBeCalled();
    expect(treeJson).toMatchSnapshot();
  });
});
