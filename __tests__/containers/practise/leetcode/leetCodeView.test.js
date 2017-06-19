import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import LeetCodeView from '../../../../src/containers/practises/leetcode/LeetCodeView';
import AsyncStorageHelper from '../../../../src/utils/AsyncStorageHelper';

it('renders correctly', () => {
  const spy = jest.spyOn(AsyncStorageHelper, 'get');
  const tree = renderer.create(
    <LeetCodeView />,
  );

  const treeJson = tree.toJSON();
  expect(spy).toHaveBeenCalled();
  expect(treeJson).toMatchSnapshot();
});
