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
            title={'算法与数据结构'}
            onPress={() => Actions.algorithmListView()}
          />
          <ListItem
            title={'设计模式'}
            onPress={() => Actions.patternsView()}
          />
          <ListItem
            title={'正则表达式'}
            onPress={() => Actions.moRegexView('')}
          />
          <ListItem
            title={'Cookbook'}
            onPress={() => Actions.comingSoon('Cookbook')}
          />
          <ListItem
            title={'练手项目'}
            onPress={() => Actions.projectList()}
          />
          <ListItem
            title={'技能测验'}
            onPress={() => Actions.examList()}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Practises;
