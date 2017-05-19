import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import Dialog from '../../src/utils/dialog';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const tree = renderer.create(
    <Dialog show />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
