import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ToolBoxDetail from '../../../../src/containers/discover/toolbox-detail/ToolBoxDetail';
import TIPS from '../../../../assets/TIPS';

it('renders correctly', () => {
  const toolBoxDetail = renderer.create(
    <ToolBoxDetail dialogContent={TIPS[0]} />,
  );
  const toolBoxDetailJson = toolBoxDetail.toJSON();
  expect(toolBoxDetailJson).toMatchSnapshot();
});
