import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ForumUserCenter from '../../../../src/containers/community/forum/ForumUserCenter';

describe('test user center', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ForumUserCenter />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});
