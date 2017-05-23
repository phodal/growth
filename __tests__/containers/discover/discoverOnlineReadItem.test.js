import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import DiscoverOnlineReadItem from '../../../src/components/discover/view/DiscoverOnlineReadItem';

const home1 = require('../../../assets/growth-ui/img/home-1.jpg');

it('renders correctly', () => {
  const onlinereadItem = renderer.create(
    <DiscoverOnlineReadItem
      image={home1}
      title={'《Growth: 全栈增长工程师实战》'}
      onclick={() => {}}
    />,
  );
  const onlinereadItemJson = onlinereadItem.toJSON();
  expect(onlinereadItemJson).toMatchSnapshot();
});
