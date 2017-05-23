// import 'react-native';
import React from 'react';
import { Linking } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import * as chai from 'chai';
import ListItem from 'react-native-elements/src/list/ListItem';

import AboutUs, { Label } from '../../../../src/containers/user-center/about-us/AboutUs';

describe('test user center / about us', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <AboutUs />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });

  it('test for pressing links', () => {
    const spy = jest.spyOn(Linking, 'openURL');

    const wrapper = shallow(<AboutUs />);

    wrapper.find({ title: '开源 - GitHub' }).props().onPress();
    wrapper.find({ title: '论坛: https://forum.growth.ren' }).props().onPress();

    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('test for children components', () => {
    const wrapper = shallow(<AboutUs />);

    chai.expect(wrapper.find(ListItem)).to.have.length(5);
    chai.expect(wrapper.find({ title: '开源 - GitHub' })).to.have.length(1);
    chai.expect(wrapper.find({ title: 'QQ 交流群: 529600495' })).to.have.length(1);
    chai.expect(wrapper.find({ title: '论坛: https://forum.growth.ren' })).to.have.length(1);
  });

  it('test for rendering Label', () => {
    const tree = renderer.create(
      <Label text="LabelText" />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});
