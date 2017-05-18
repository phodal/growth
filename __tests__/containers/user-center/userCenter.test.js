import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import UserCenter from '../../../src/containers/user-center/UserCenter';

describe('test user center', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <UserCenter />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});
