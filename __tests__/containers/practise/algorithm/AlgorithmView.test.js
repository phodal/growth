import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import AlgorithmView from '../../../../src/containers/practises/algorithm/AlgorithmView';

it('renders correctly', () => {
  const tree = renderer.create(
    <AlgorithmView />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
