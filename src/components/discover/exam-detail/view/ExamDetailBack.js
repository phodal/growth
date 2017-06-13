import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

class ExamDetailBack extends Component {
  static componentName = 'ExamDetailBack';
  render() {
    return (
      <View style={{ height: 40, flexDirection: 'row' }}>
        <View style={{ flex: 1 }} />
        <Button
          raised
          icon={{ name: 'exit-to-app' }}
          title="结束"
          onPress={() => Actions.pop()}
        />
      </View>
    );
  }
}
export default ExamDetailBack;
