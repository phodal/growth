import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import P from '../../../src/components/htmlview/P';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const p = renderer.create(
    <P component={<Text>2333</Text>} />,
  );
  const pJson = p.toJSON();
  expect(pJson).toMatchSnapshot();
});
