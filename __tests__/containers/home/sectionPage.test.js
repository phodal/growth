import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import SectionPage from '../../../src/containers/home/sections/SectionPage';

const mockStore = configureStore();
const dispatch = () => {};

it('renders correctly', () => {
  const tree = renderer.create(
    <SectionPage
      dispatch={dispatch}
      store={mockStore({ section: {} })}
      sectionIndex={1} subSectionIndex={1}
    />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
