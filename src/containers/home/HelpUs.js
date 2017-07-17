import React, { Component } from 'react';
import { Linking, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';

class HelpUs extends Component {
  static componentName = 'HelpUs';

  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <Text style={{ padding: 15 }}>
          Growth 是一个开源的、免费应用，当前 Growth 应用过于庞大，已经远超出我（@phodal）一个人的维护范围。如，在当前版权里，
          已经有相当多的功能只是一个占位符。在未来的相当长的一段时间里，许多功能也将只是一个占位符，因为我们迫切需要新鲜的血液。
        </Text>
        <Text style={{ padding: 15 }}>
          如果你会 React Native，可以直接参加 Growth 的开发。
        </Text>
        <Text style={{ padding: 15 }}>
          如果你英语好，可以参与 Growth 中的翻译计划。
        </Text>
        <Text style={{ padding: 15 }}>
          如果你什么都不会，可以给 Growth 点个 star。
        </Text>
        <ListItem
          style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#ddd', padding: 10 }}
          title={'Growth 项目 GitHub'}
          rightIcon={{ name: 'github', type: 'font-awesome' }}
          onPress={() => Linking.openURL('https://github.com/phodal/growth-ng')}
        />
      </View>
    );
  }
}

export default HelpUs;
