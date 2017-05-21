import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ArticleList from '../../../../src/containers/discover/article-list/ArticleList';

it('renders correclty', () => {
  const articleList = renderer.create(
    <ArticleList />,
  );
  const articleListJson = articleList.toJSON();
  expect(articleListJson).toMatchSnapshot();
});
