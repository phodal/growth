import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppStyle from '../../../../theme/styles';

class ExamDetailBack extends Component {
  static componentName = 'ExamDetailBack';
  render() {
    return (
      <View style={{ height: 40, flexDirection: 'row' }}>
        <View style={{ flex: 1 }} />
        <TouchableHighlight
          onPress={() => Actions.pop()}
          style={AppStyle.examDetailBackStyle}
        >
          <Text style={{ color: '#03a9f4' }}>bakc</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default ExamDetailBack;
