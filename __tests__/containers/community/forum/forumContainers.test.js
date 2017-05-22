import { Text } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ForumContainer from '../../../../src/containers/community/forum/ForumContainers';

describe('test user center', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ForumContainer url={'https://forum.growth.ren/api/discussions'} element={data => <Text>{ data }</Text>} />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});
