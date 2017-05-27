/* eslint-disable class-methods-use-this */
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Icon, Divider } from 'react-native-elements';

import Colors from '../../theme/colors';
import ForumContainer from './forum/ForumContainers';

const TimeAgo = require('react-native-timeago');
const moment = require('moment'); // load moment module to set local language
require('moment/locale/zh-cn'); // for import moment local language file during the application build

moment.locale('zh-cn');// set moment local language to zh-cn

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />;

class Community extends PureComponent {
  static componentName = 'Community';

  state = {
    index: 0,
    routes: [
      { key: '1', title: '论坛' },
      { key: '2', title: '动态' },
    ],
  };

  handleChangeTab = index => this.setState({ index });

  renderHeader = props => <TabBar {...props} />;

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

  renderScene = SceneMap({
    1: () => <ForumContainer url={'https://forum.growth.ren/api/discussions'} element={data => this.renderElement(data)} />,
    2: SecondRoute,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onRequestChangeTab={this.handleChangeTab}
      />
    );
  }
}

export default Community;
