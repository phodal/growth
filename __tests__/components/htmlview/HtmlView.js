import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import HtmlView from '../../../src/components/htmlview/HtmlView';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const html = renderer.create(
    <HtmlView
      value={'<h1>2333</h1>'}
    />,
  );
  const htmlJson = html.toJSON();
  expect(htmlJson).toMatchSnapshot();
});
