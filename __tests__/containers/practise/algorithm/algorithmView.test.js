import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import AlgorithmListView from '../../../../src/containers/practises/algorithm/AlgorithmListView';

xit('renders correctly', () => {
  const tree = renderer.create(
    <AlgorithmListView />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
