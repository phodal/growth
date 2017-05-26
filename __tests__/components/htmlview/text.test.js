import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import HtmlText from '../../../src/components/htmlview/HtmlText';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const text = renderer.create(
    <HtmlText text={2333} component={<Text>2333</Text>} />,
  );
  const textJson = text.toJSON();
  expect(textJson).toMatchSnapshot();
});
