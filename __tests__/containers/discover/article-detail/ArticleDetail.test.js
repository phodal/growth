import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ArticleDetail from '../../../../src/containers/discover/article-detail/ArticleDetail';
import TIPS from '../../../../assets/TIPS';

it('renders correclty', () => {
  const articleDetail = renderer.create(
    <ArticleDetail uri={'articles/javascript.txt'} dialogContent={TIPS[0]} />,
  );
  const articleDetailJson = articleDetail.toJSON();
  expect(articleDetailJson).toMatchSnapshot();
});
