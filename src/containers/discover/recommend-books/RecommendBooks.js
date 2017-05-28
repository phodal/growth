import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import RecommendSimpleItem from '../../../components/discover/recommend-articles/view/RecommendSimpleItem';
import RECOMMEND_BOOKS_LIST from '../../../constants/RECOMMEND_BOOKS_LIST';
import Launch from '../../../components/discover/Launch';

class RecommendBooks extends Component {
  static componentName = 'RecommendBooks';

  constructor(props) {
    super(props);
    this.state = {
      data: RECOMMEND_BOOKS_LIST,
    };
  }

  render() {
    const rows = this.state.data.map((val, index) => (
      <RecommendSimpleItem
        content={val}
        launch={Launch.recommendBooksDetail}
        key={val.name.concat(index)}
      />));
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>{rows}</ScrollView>
    );
  }
}
export default RecommendBooks;
