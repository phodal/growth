import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Code from '../../../src/components/htmlview/Code';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const code = renderer.create(
    <Code component={<Text>2333</Text>} />,
  );
  const codeJson = code.toJSON();
  expect(codeJson).toMatchSnapshot();
});
