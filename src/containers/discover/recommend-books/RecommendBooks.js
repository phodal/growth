import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import RecommendSimpleItem from '../../../components/discover/recommend-articles/view/RecommendSimpleItem';
import RECOMMEND_BOOKS_LIST from '../../../constants/RECOMMEND_BOOKS_LIST';
import Launch from '../../../components/discover/Launch';

class RecommendBooks extends Component {
  static componentName = 'RecommendBooks';

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      books: PropTypes.shape({
        category: PropTypes.string,
        slug: PropTypes.string,
        store: PropTypes.string,
        title: PropTypes.string,
      }),
    })),
    withoutHeading: PropTypes.bool,
  };

  static defaultProps = {
    data: RECOMMEND_BOOKS_LIST,
    withoutHeading: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      withoutHeading: this.props.withoutHeading,
    };
  }

  render() {
    const rows = this.state.data.map((val, index) => (
      <RecommendSimpleItem
        content={val}
        launch={Launch.recommendBooksDetail}
        withoutHeading={this.state.withoutHeading}
        key={val.name.concat(index)}
      />));
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>{rows}</ScrollView>
    );
  }
}
export default RecommendBooks;
