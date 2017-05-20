import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Ul from '../../../src/components/htmlview/Ul';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const ul = renderer.create(
    <Ul component={<Text>2333</Text>} />,
  );
  const ulJson = ul.toJSON();
  expect(ulJson).toMatchSnapshot();
});
