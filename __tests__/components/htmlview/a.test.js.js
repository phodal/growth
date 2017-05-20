import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import A from '../../../src/components/htmlview/A';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const a = renderer.create(
    <A link={'https://github.com/phodal/growth-ng'} component={<Text>2333</Text>} />,
  );
  const aJson = a.toJSON();
  expect(aJson).toMatchSnapshot();
});
