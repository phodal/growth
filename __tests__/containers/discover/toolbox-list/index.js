import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ToolBoxList from '../../../../src/containers/discover/toolbox-list/ToolBoxList';
import TIPS from '../../../../assets/TIPS';

it('renders correctly', () => {
  const toolBoxList = renderer.create(
    <ToolBoxList dialogContent={TIPS[0]} />,
  );
  const toolBoxListJson = toolBoxList.toJSON();
  expect(toolBoxListJson).toMatchSnapshot();
});
