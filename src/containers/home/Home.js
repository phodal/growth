import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from 'react-native-elements/src/containers/Card';

class Home extends Component {
  static componentName = 'Home';

  render = () => (
    <View>
      <Card
        containerStyle={{ borderRadius: 5 }}
      >
        <Text style={{ fontSize: 20, marginTop: 5, marginBottom: 20 }}>从零开始</Text>
        <Text style={{ marginTop: 5, marginBottom: 15 }}>
          从这里准备开始你的技术图谱修炼之路
        </Text>
      </Card>
    </View>
  );
}

export default Home;
