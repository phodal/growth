import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Img from '../../../src/components/htmlview/Img';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const img = renderer.create(
    <Img
      uri={'https://facebook.github.io/react/img/logo_og.png'}
    />,
  );
  const imgJson = img.toJSON();
  expect(imgJson).toMatchSnapshot();
});
