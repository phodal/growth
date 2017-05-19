import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Community from '../../../src/containers/community/Community';

describe('test user center', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Community />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});
