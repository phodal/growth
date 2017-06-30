import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
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


  keyExtractor = (item, index) => `key${index}`;

// eslint-disable-next-line no-unused-vars
  renderList = ({ item, index }) => (
    <ListItem
      title={BOOKS[index].name}
      key={BOOKS[index].name.concat(index)}
      onPress={() => Launch.domainDetailPage(BOOKS[index].name, BOOKS[index].path)}
    />
  );

  render() {
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        <List containerStyle={{ borderTopWidth: 0, marginTop: 0 }}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={BOOKS}
            renderItem={this.renderList}
          />
        </List>
      </ScrollView>
    );
  }
}
export default ThoughtworksBooks;
