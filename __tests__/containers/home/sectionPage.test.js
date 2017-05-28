import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import SectionPage from '../../../src/containers/home/sections/SectionPage';

it('renders correctly', () => {
  const tree = renderer.create(
    <SectionPage sectionIndex={1} subSectionIndex={1} />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
