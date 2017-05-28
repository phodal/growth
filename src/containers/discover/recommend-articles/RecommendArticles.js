import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import RecommendSimpleItem from '../../../components/discover/recommend-articles/view/RecommendSimpleItem';
import RECOMMEND_ARTICLES_LIST from '../../../constants/RECOMMEND_ARTICLES_LIST';
import Launch from '../../../components/discover/Launch';

class RecommendArticles extends Component {
  static componentName = 'RecommendArticles';

  constructor(props) {
    super(props);
    this.state = {
      data: RECOMMEND_ARTICLES_LIST,
    };
  }

  render() {
    const rows = this.state.data.map((val, index) => (
      <RecommendSimpleItem
        content={val}
        launch={Launch.recommendArticlesDetail}
        key={val.name.concat(index)}
      />));
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>{rows}</ScrollView>
    );
  }
}
export default RecommendArticles;
