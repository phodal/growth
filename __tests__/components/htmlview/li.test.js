import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Li from '../../../src/components/htmlview/Li';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const li = renderer.create(
    <Li
      component={<Text>2333</Text>}
    />,
  );
  const liJson = li.toJSON();
  expect(liJson).toMatchSnapshot();
});
