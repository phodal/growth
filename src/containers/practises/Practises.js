import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ListItem, List } from 'react-native-elements';

class Practises extends Component {
  static componentName = 'Practises';

  render() {
    return (
      <ScrollView>
        <List containerStyle={{ borderTopWidth: 0 }}>
          <ListItem
            title={'LeetCode'}
            onPress={() => Actions.leetCodeView()}
          />
          <ListItem
            title={'算法'}
            onPress={() => Actions.algorithmView()}
          />
          <ListItem
            title={'数据结构'}
            onPress={() => Actions.comingSoon('数据结构')}
          />
          <ListItem
            title={'设计模式'}
            onPress={() => Actions.comingSoon('设计模式')}
          />
          <ListItem
            title={'正则表达式'}
            onPress={() => Actions.comingSoon('正则表达式')}
          />
          <ListItem
            title={'代码之美'}
            onPress={() => Actions.comingSoon('代码之美')}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Practises;
