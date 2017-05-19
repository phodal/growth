import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import SuperCardView from '../../src/components/SuperCardView';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const tree = renderer.create(
    <SuperCardView title={'从零开始'} subTitle={'从这里准备开始你的技术图谱修炼之路'} iconName={'md-home'} />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
