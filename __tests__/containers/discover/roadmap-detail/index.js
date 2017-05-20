import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import RoadmapDetail from '../../../../src/containers/discover/roadmap-detail/RoadmapDetail';

it('renders correctly', () => {
  const roadmapDetail = renderer.create(
    <RoadmapDetail />,
  );
  const roadmapDetailJson = roadmapDetail.toJSON();
  expect(roadmapDetailJson).toMatchSnapshot();
});
