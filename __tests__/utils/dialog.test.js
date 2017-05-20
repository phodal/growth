import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import Dialog from '../../src/components/dialog';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;

  const tree = renderer.create(
    <Dialog show />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
