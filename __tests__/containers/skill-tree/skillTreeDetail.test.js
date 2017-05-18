import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

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

  it('test click link', () => {
    const spy = jest.spyOn(SkillDetailView, 'openPage');
    const wrapper = shallow(<SkillDetailView skillId={1} />);
    wrapper.find({ title: '无处不在的html' }).props().onPress();
    expect(spy).toHaveBeenCalled();
  });

  it('test click book', () => {
    const spy = jest.spyOn(SkillDetailView, 'openPage');
    const wrapper = shallow(<SkillDetailView skillId={2} />);
    wrapper.find({ title: 'CSS禅意花园' }).props().onPress();
    expect(spy).toHaveBeenCalled();
  });
});
