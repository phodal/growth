import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ProjectList from '../../../../src/containers/discover/project-list/ProjectList';
import TIPS from '../../../../src/constants/TIPS';

it('renders correctly', () => {
  const projectList = renderer.create(
    <ProjectList dialogContent={TIPS[0]} />,
  );
  const projectListJson = projectList.toJSON();
  expect(projectListJson).toMatchSnapshot();
});
