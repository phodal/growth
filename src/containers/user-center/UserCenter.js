import React from 'react';
import ListItem from 'react-native-elements/src/list/ListItem';
import List from 'react-native-elements/src/list/List';

class UserCenter extends React.PureComponent {
  render = () => (
    <List>
      <ListItem
        title={'我的书签'}
      />
    </List>
  );
}

export default UserCenter;
