import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ListItem, List } from 'react-native-elements';
// import FileHelper from '../../utils/FileHelper';

class Practises extends Component {
  static componentName = 'Practises';

  render() {
    // FileHelper.fetchFile('https://github.com/phodal/growth-leetcode-api/archive/master.zip', 'leetcode');

    return (
      <ScrollView>
        <List>
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
          />
          <ListItem
            title={'设计模式'}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Practises;
