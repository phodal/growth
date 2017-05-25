import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import RoadmapList from '../../../../src/containers/discover/roadmap-list/RoadmapList';
import TIPS from '../../../../src/constants/TIPS';

it('renders correctly', () => {
  const roadmapList = renderer.create(
    <RoadmapList dialogContent={TIPS[0]} />,
  );
  const roadmapListJson = roadmapList.toJSON();
  expect(roadmapListJson).toMatchSnapshot();
});
