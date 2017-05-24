import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Growth from '../src/index';

describe('test index', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Growth />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});
