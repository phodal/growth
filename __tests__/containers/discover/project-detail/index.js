import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ProjectDetail from '../../../../src/containers/discover/project-detail/ProjectDetail';

it('renders correctly', () => {
  const projectDetail = renderer.create(
    <ProjectDetail />,
  );
  const projectDetailJson = projectDetail.toJSON();
  expect(projectDetailJson).toMatchSnapshot();
});
