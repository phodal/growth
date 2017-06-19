import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import Home from '../../../src/containers/home/Home';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const tree = renderer.create(
    <Home skillId={1} />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
