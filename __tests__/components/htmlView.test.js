import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import HtmlView from '../../src/components/HtmlView';
import HELPER_ARTICLES from '../../src/constants/HELPER_ARTICLES';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const htmlView = renderer.create(
    <HtmlView domain={'article'} slug={HELPER_ARTICLES['zh-cn'].hello[0].slug} />,
  );

  const htmlViewJson = htmlView.toJSON();
  expect(htmlViewJson).toMatchSnapshot();
});
