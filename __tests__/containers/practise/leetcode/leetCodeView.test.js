import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import LeetCodeView from '../../../../src/containers/practises/leetcode/LeetCodeView';

it('renders correctly', () => {
  const tree = renderer.create(
    <LeetCodeView />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
