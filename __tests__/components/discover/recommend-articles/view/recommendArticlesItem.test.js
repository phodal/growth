import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import RecommendSimpleItem from '../../../../../src/components/discover/recommend-articles/view/RecommendSimpleItem';
import RECOMMEND_ARTICLES_LIST from '../../../../../src/constants/RECOMMEND_ARTICLES_LIST';

it('renders correctly', () => {
  const recommendSimpleItem = renderer.create(
    <RecommendSimpleItem content={RECOMMEND_ARTICLES_LIST[0]} />,
  );
  const recommendSimpleItemJson = recommendSimpleItem.toJSON();
  expect(recommendSimpleItemJson).toMatchSnapshot();
});
