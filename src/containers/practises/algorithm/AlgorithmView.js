import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, List } from 'react-native-elements';
import Helper from '../../../utils/helper';
import Label from '../../../components/Label';

class AlgorithmView extends Component {
  static componentName = 'AlgorithmView';

  render() {
    return (
      <ScrollView>
        <Label text="资源推荐" />
        <List containerStyle={{ borderTopWidth: 0 }}>
          <ListItem
            title={'VisuAlgo'}
            onPress={() => Helper.openLink('https://visualgo.net/zh')}
          />
        </List>

        <Label text="图说" />
        <List containerStyle={{ borderTopWidth: 0 }}>
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
