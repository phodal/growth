import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import GrowthSlider from '../../../../src/components/home/GrowthSlider';


it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const dialog = renderer.create(
    <GrowthSlider />,
  );
  const dialogJson = dialog.toJSON();
  expect(dialogJson).toMatchSnapshot();
});
