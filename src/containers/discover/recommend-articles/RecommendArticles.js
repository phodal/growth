import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import RecommendArticlesItem from '../../../components/discover/recommend-articles/view/RecommendArticlesItem';
import HELPER_ARTICLES from '../../../constants/HELPER_ARTICLES';
import DOMAIN_NAME from '../../../constants/DOMAIN_NAME';

function getData() {
  return ([
    { name: DOMAIN_NAME.hello, books: HELPER_ARTICLES['zh-cn'].hello },
    { name: DOMAIN_NAME.env, books: HELPER_ARTICLES['zh-cn'].env },
    { name: DOMAIN_NAME.build, books: HELPER_ARTICLES['zh-cn'].build },
    { name: DOMAIN_NAME.front, books: HELPER_ARTICLES['zh-cn'].front },
    { name: DOMAIN_NAME.backend, books: HELPER_ARTICLES['zh-cn'].backend },
    { name: DOMAIN_NAME.before, books: HELPER_ARTICLES['zh-cn'].before },
    { name: DOMAIN_NAME.test, books: HELPER_ARTICLES['zh-cn'].test },
    { name: DOMAIN_NAME.coding, books: HELPER_ARTICLES['zh-cn'].coding },
    { name: DOMAIN_NAME.container, books: HELPER_ARTICLES['zh-cn'].container },
    { name: DOMAIN_NAME.server, books: HELPER_ARTICLES['zh-cn'].server },
    { name: DOMAIN_NAME.configurable, books: HELPER_ARTICLES['zh-cn'].configurable },
    { name: DOMAIN_NAME.analytics, books: HELPER_ARTICLES['zh-cn'].analytics },
    { name: DOMAIN_NAME.ux, books: HELPER_ARTICLES['zh-cn'].ux },
    { name: DOMAIN_NAME.ci, books: HELPER_ARTICLES['zh-cn'].ci },
    { name: DOMAIN_NAME.cd, books: HELPER_ARTICLES['zh-cn'].cd },
    { name: DOMAIN_NAME.legacy, books: HELPER_ARTICLES['zh-cn'].legacy },
    { name: DOMAIN_NAME.refactor, books: HELPER_ARTICLES['zh-cn'].refactor },
    { name: DOMAIN_NAME.retro, books: HELPER_ARTICLES['zh-cn'].retro },
    { name: DOMAIN_NAME.arch, books: HELPER_ARTICLES['zh-cn'].arch },
  ]);
}

class RecommendArticles extends Component {
  static componentName = 'RecommendArticles';

  constructor(props) {
    super(props);
    this.state = {
      data: getData(),
    };
  }

  render() {
    console.log(this.state.data)
    const rows = this.state.data.map((val, index) => (
      <RecommendArticlesItem content={val} key={val.name.concat(index)} />));
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>{rows}</ScrollView>
    );
  }
}
export default RecommendArticles;
