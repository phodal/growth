import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import RecommendArticles from '../../../../src/containers/discover/recommend-articles/RecommendArticles';

it('renders correctly', () => {
  const recommendArticles = renderer.create(
    <RecommendArticles />,
  );
  const recommendArticlesJson = recommendArticles.toJSON();
  expect(recommendArticlesJson).toMatchSnapshot();
});
