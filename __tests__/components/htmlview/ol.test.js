import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Ol from '../../../src/components/htmlview/Ol';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const ol = renderer.create(
    <Ol component={<Text>2333</Text>} />,
  );
  const olJson = ol.toJSON();
  expect(olJson).toMatchSnapshot();
});
