/* eslint-disable global-require */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import GrowthImageCard from '../../../../src/components/home/GrowthImageCard';


it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const dialog = renderer.create(
    <GrowthImageCard
      imageUrl={require('../../../../assets/growth-ui/img/home-6.jpg')}
      actions={() => {}}
      text={'Growth 技能树'}
    />,
  );
  const dialogJson = dialog.toJSON();
  expect(dialogJson).toMatchSnapshot();
});
