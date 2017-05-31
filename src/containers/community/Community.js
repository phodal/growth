/* eslint-disable class-methods-use-this */
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Icon, Divider } from 'react-native-elements';

import Colors from '../../theme/colors';
import ForumContainer from './forum/ForumContainers';

const TimeAgo = require('react-native-timeago');
const moment = require('moment'); // load moment module to set local language
require('moment/locale/zh-cn'); // for import moment local language file during the application build

moment.locale('zh-cn');// set moment local language to zh-cn


class Community extends PureComponent {
  static componentName = 'Community';

  renderElement(topic) {
    let sticky = <View />;
    if (topic.attributes.isSticky) {
      sticky = (<View
        style={{
          marginLeft: 5,
          marginRight: 10,
          backgroundColor: Colors.brand.primary,
          padding: 5,
          borderRadius: 2,
        }}
      >
        <Text style={{ marginTop: -3, color: '#fff' }}>置顶</Text>
      </View>);
    }

    return (<View
      style={{
        height: 72,
        backgroundColor: '#fff',
      }}
    >
      <View style={{ margin: 8 }}>
        <Text numberOfLines={1} style={{ fontSize: 15 }}>{topic.attributes.title}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', margin: 8, justifyContent: 'space-between' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {sticky}
          <View><Text style={{ color: '#333' }}><TimeAgo time={topic.attributes.lastTime} interval={20000} /></Text></View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon style={{ marginLeft: 5, marginRight: 5 }} name={'ios-chatboxes-outline'} type={'ionicon'} color={'#333'} />
          <Text>{topic.attributes.commentsCount}</Text>
        </View>
      </View>
      <Divider style={{ backgroundColor: '#eee' }} />
    </View>
    );
  }

  render() {
    return (
      <ForumContainer url={'https://forum.growth.ren/api/discussions'} element={data => this.renderElement(data)} />
    );
  }
}

export default Community;
