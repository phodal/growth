import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import Practises from '../../../src/containers/practises/Practises';

describe('test practise', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Practises />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});
