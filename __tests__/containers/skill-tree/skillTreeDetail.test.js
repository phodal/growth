import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import SkillDetailView from '../../../src/containers/skill-tree/SkillDetailView';
import Helper from '../../../src/utils/helper';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const tree = renderer.create(
    <SkillDetailView skillId={1} />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});

describe('test link', () => {
  it('should open market in browser', () => {
    const spy = jest.spyOn(Helper, 'openLink');
    SkillDetailView.openPage('https://www.phodal.com/');
    expect(spy).toBeCalledWith('https://www.phodal.com/');
  });
});
