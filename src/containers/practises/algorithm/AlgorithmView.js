import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, List } from 'react-native-elements';

class AlgorithmView extends Component {
  static componentName = 'AlgorithmView';

  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title={'快速排序'}
          />
          <ListItem
            title={'梳排序'}
          />
          <ListItem
            title={'地精排序'}
          />
          <ListItem
            title={'选择排序'}
          />
          <ListItem
            title={'冒泡排序'}
          />
          <ListItem
            title={'Bogo排序'}
          />
        </List>
      </ScrollView>
    );
  }
}

export default AlgorithmView;
