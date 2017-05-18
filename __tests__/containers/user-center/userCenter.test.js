import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Share from 'react-native-share';

import UserCenter from '../../../src/containers/user-center/UserCenter';

describe('test user center', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <UserCenter />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });

  it('should call share to friend function when click button', () => {
    const spy = jest.spyOn(Share, 'open');
    UserCenter.shareToFriend();
    expect(spy).toBeCalledWith({
      title: 'Growth：带你成为顶尖开发者',
      message: '我现在使用Growth，这是一款专注于Web开发者成长的应用，涵盖Web开发的流程及技术栈，Web开发的学习路线、成长衡量等各方面。快来下载吧!',
      url: 'http://growth.ren/',
    });
  });
});
