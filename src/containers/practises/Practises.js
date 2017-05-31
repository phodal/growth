import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { ListItem, List } from 'react-native-elements';

class Practises extends Component {
  static componentName = 'Practises';

  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title={'算法'}
            leftIcon={{ name: 'bug-report' }}
          />
          <ListItem
            title={'数据结构'}
            leftIcon={{ name: 'bug-report' }}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Practises;
