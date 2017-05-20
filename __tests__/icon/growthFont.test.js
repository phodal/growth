import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import Icon from '../../src/icon/GrowthFont';


it('renders correctly', () => {
  const simplelist = renderer.create(

    <Icon
      name={'md-home'}
      size={30}
      style={{ color: '#03a9f4' }}
    />,
  );
  const simplelistJson = simplelist.toJSON();
  expect(simplelistJson).toMatchSnapshot();
});
