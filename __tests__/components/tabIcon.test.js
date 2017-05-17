import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import TabIcon from '../../src/components/TabIcon';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const tree = renderer.create(
    <TabIcon skillId={1} />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
