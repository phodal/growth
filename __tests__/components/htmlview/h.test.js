import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import H from '../../../src/components/htmlview/H';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const h = renderer.create(
    <H component={<Text>2333</Text>} />,
  );
  const hJson = h.toJSON();
  expect(hJson).toMatchSnapshot();
});
