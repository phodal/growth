import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Blockquote from '../../../src/components/htmlview/Blockquote';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const blockquote = renderer.create(
    <Blockquote component={<Text>2333</Text>} />,
  );
  const blockquoteJson = blockquote.toJSON();
  expect(blockquoteJson).toMatchSnapshot();
});
