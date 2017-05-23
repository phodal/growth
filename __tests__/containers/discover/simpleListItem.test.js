import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import SimpleListItem from '../../../src/components/discover/view/SimpleListItem';


it('renders correctly', () => {
  const simplelist = renderer.create(
    <SimpleListItem
      key={'233333'}
      text={'23333'}
      click={() => {}}
    />,
  );
  const simplelistJson = simplelist.toJSON();
  expect(simplelistJson).toMatchSnapshot();
});
