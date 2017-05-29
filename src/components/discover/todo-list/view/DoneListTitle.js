import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppStyle from '../../../../theme/styles';

class DoneListTitle extends Component {
  static componentName = 'DoneListTitle';
  render() {
    return (
      <View
        style={AppStyle.titleVerticalCenterColorGrayStyle}
      >
        <Text style={{ color: '#999' }}>已完成</Text>
      </View>);
  }
}
export default DoneListTitle;
