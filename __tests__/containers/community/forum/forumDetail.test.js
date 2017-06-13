import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ForumDetail from '../../../../src/containers/community/forum/ForumDetail';

describe('test user center', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ForumDetail />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});
