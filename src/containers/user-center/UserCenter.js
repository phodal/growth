import React from 'react';
import ListItem from 'react-native-elements/src/list/ListItem';
import List from 'react-native-elements/src/list/List';
import { View } from 'react-native';

class UserCenter extends React.PureComponent {
  render = () => (
    <View>
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
    </View>
  );
}

export default UserCenter;
