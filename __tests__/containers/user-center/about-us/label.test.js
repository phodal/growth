import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Label from '../../../../src/containers/user-center/about-us/Label';

describe('test user center / about us / label', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Label text="LabelText" />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});
