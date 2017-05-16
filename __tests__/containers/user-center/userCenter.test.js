import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import UserCenter from '../../../src/containers/user-center/UserCenter';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const tree = renderer.create(
    <UserCenter />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
