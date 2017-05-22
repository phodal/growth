import React from 'react';
import renderer from 'react-test-renderer';
import ForumView from '../../../../src/containers/community/forum/ForumView';

describe('test user center', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ForumView
        data={[]}
        canLoadMoreContent={false}
        onLoadMoreAsync={() => {}}
        reFetch={() => {}}
        dataUrl={'https://forum.growth.ren/api/discussions'}
        element={() => {}}
      />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});
