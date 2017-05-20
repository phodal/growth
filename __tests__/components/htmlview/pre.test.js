import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Pre from '../../../src/components/htmlview/Pre';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const pre = renderer.create(
    <Pre component={<Text>2333</Text>} />,
  );
  const preJson = pre.toJSON();
  expect(preJson).toMatchSnapshot();
});
