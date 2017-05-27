import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import CustomWebView from '../../src/components/CustomWebView';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const customWebView = renderer.create(
    <CustomWebView value={'<h1>233333</h1>'} />,
  );

  const customWebViewJson = customWebView.toJSON();
  expect(customWebViewJson).toMatchSnapshot();
});
