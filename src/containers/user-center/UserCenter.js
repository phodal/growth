import React, { Component } from 'react';
import ListItem from 'react-native-elements/src/list/ListItem';
import List from 'react-native-elements/src/list/List';
import { ScrollView } from 'react-native';

class UserCenter extends Component {
  static componentName = 'UserCenter';

  render = () => (
    <ScrollView>
      <List>
        <ListItem
          title={'我的书签'}
          leftIcon={{ name: 'bookmark' }}
        />
        <ListItem
          title={'我的技能分布'}
          leftIcon={{ name: 'trending-up' }}
        />
      </List>
      <List>
        <ListItem
          title={'关于'}
          leftIcon={{ name: 'info' }}
        />
        <ListItem
          title={'分享给好友'}
          leftIcon={{ name: 'group-work' }}
        />
        <ListItem
          title={'觉得不错，给个好评'}
          leftIcon={{ name: 'thumb-up' }}
        />
        <ListItem
          title={'发现Bug'}
          leftIcon={{ name: 'bug-report' }}
        />
        <ListItem
          title={'功能反馈'}
          leftIcon={{ name: 'feedback' }}
        />
      </List>
      <List>
        <ListItem
          title={'微信公众号'}
          leftIcon={{ name: 'code' }}
        />
        <ListItem
          title={'支持开发'}
          leftIcon={{ name: 'work' }}
        />
      </List>
    </ScrollView>
  );
}

export default UserCenter;
