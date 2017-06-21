import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class ComingSoonView extends Component {
  static componentName = 'ComingSoonView';

  render() {
    return (
      <View>
        <Text>Coming Soon</Text>
        <Button
          icon={{ name: 'thumb-up' }}
          title="需要"
          borderRadius={6}
          backgroundColor={'#03a9f4'}
        />
        <Button
          icon={{ name: 'thumb-down' }}
          title="不需要"
          borderRadius={6}
        />
        <Text>这个功能我们正在考虑中，如果你需要请点个赞</Text>
      </View>
    );
  }
}

export default ComingSoonView;
