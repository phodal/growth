import React from 'react';
// import { Linking } from 'react-native';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import ContributorProfile from '../../../../src/containers/user-center/about-us/ContributorProfile';

const contributor = {
  nickname: 'nickname',
  duty: 'duty',
  bio: 'bio',
  profile: {
    github: 'github',
    weibo: 'weibo',
    zhihu: 'zhihu',
    blog: 'http://blog.io',
  },
};

describe('test user center / about us / contributor profile', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ContributorProfile contributor={contributor} />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
  //
  // it('test for pressing links', () => {
  //   const spy = jest.spyOn(Linking, 'openURL');
  //
  //   const wrapper = shallow(
  //     <ContributorProfile contributor={contributor} />,
  //   );
  //
  //   wrapper.find({ title: `GitHub: @${contributor.profile.github}` }).props().onPress();
  //   wrapper.find({ title: `博客: ${contributor.profile.blog}` }).props().onPress();
  //
  //   expect(spy).toHaveBeenCalledTimes(2);
  // });
});
