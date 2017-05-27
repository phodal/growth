import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SimpleListItem from '../../../components/discover/view/SimpleListItem';
import AppStyle from '../../../theme/styles';
import Launch from '../../../components/discover/Launch';

const BOOKS = [
  { name: '编程实践', path: 'practical' },
  { name: '架构与设计', path: 'architecture' },
  { name: '方法学', path: 'methodology' },
  { name: '思想与领导力', path: 'leadership' },
];

class ThoughtworksBooks extends Component {
  static componentName = 'ThoughtworksBooks';

  render() {
    const rows = Array.from(new Array(BOOKS.length))
      .map((val, index) => (
        <SimpleListItem
          text={BOOKS[index].name}
          click={() => Launch.domainDetailPage(BOOKS[index].name, BOOKS[index].path)}
          key={BOOKS[index].name.concat(index)}
        />));

    return (
      <ScrollView style={AppStyle.detailBasisStyle}>{rows}</ScrollView>
    );
  }
}
export default ThoughtworksBooks;
