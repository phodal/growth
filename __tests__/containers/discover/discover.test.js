import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Discover from '../../../src/containers/discover/Discover';

describe('test user center', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Discover />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});
