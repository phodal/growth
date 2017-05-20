import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import Discover from '../../../src/containers/discover/Discover';

it('renders correctly', () => {
  const discover = renderer.create(
    <Discover />,
  );
  const discoverJson = discover.toJSON();
  expect(discoverJson).toMatchSnapshot();
});
