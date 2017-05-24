import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import DiscoverGridItem from '../../../../src/components/discover/view/DiscoverGridItem';

it('renders correctly', () => {
  const gridItem = renderer.create(
    <DiscoverGridItem title="学习路线" iconName="icon-social" position={'left'} onclick={() => {}} />,
  );
  const gridItemJson = gridItem.toJSON();
  expect(gridItemJson).toMatchSnapshot();
});
