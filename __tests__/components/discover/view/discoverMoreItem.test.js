import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import DiscoverMoreItem from '../../../../src/components/discover/view/DiscoverMoreItem';

const home3 = require('../../../../assets/growth-ui/img/home-3.jpg');

it('renders correctly', () => {
  const moreItem = renderer.create(
    <DiscoverMoreItem
      image={home3}
      title="你还需要什么功能？"
      titleBackgroundColor="rgba(255,255,255, .5)"
      onclick={() => {}}
    />,
  );
  const moreItemJson = moreItem.toJSON();
  expect(moreItemJson).toMatchSnapshot();
});
