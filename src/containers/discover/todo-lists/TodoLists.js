import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import AppStyle from '../../../theme/styles';
import TODO_LISTS_ITEM from '../../../constants/TODO_LISTS_ITEM';
import Launch from '../../../components/discover/Launch';

class TodoLists extends Component {
  static componentName = 'TodoLists';

  constructor(props) {
    super(props);
    this.state = {
      data: TODO_LISTS_ITEM,
    };
  }

  keyExtractor = (item, index) => `key${index}`;

  renderList = ({ item, index }) => (
    <ListItem
      title={item.name}
      key={item.name.concat(index)}
      onPress={() => Launch.todoList(item)}
    />
  );

  render() {
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        <List containerStyle={{ borderTopWidth: 0, marginTop: 0 }}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.data}
            renderItem={this.renderList}
          />
        </List>
      </ScrollView>
    );
  }
}
export default TodoLists;
