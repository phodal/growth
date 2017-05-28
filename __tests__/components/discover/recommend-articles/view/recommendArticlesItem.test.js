import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import RecommendArticlesItem from '../../../../../src/components/discover/recommend-articles/view/RecommendArticlesItem';
import RECOMMEND_ARTICLES_LIST from '../../../../../src/constants/RECOMMEND_ARTICLES_LIST';

it('renders correctly', () => {
  const recommendArticlesItem = renderer.create(
    <RecommendArticlesItem content={RECOMMEND_ARTICLES_LIST[0]} />,
  );
  const recommendArticlesItemJson = recommendArticlesItem.toJSON();
  expect(recommendArticlesItemJson).toMatchSnapshot();
});
