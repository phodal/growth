import React from 'react';
import { Linking, ScrollView, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import AppStyle from '../../../theme/styles';

const contributors = [{
  avatar: 'https://facebook.github.io/react/img/logo_og.png',
  name: 'Name Placeholder',
  description: 'Placeholder',
}, {
  avatar: 'https://facebook.github.io/react/img/logo_og.png',
  name: 'Name Placeholder 1',
  description: 'Placeholder 1',
}];

export const Label = props => (
  <View style={{ paddingLeft: 20, marginTop: 12, marginBottom: -6 }}>
    <Text style={{ fontSize: 14 }}>
      {props.text}
    </Text>
  </View>
);

Label.propTypes = {
  text: React.PropTypes.string.isRequired,
};

const AboutUs = () => (
  <ScrollView style={AppStyle.userCenterBasisStyle}>
    <Label text="Growth" />
    <List>
      <ListItem
        title={'开源 - GitHub'}
        rightIcon={{ name: 'github', type: 'font-awesome' }}
        onPress={() => Linking.openURL('https://github.com/phodal/growth-ng')}
      />
      <ListItem
        title={'QQ 交流群: 529600495'}
        hideChevron
      />
      <ListItem
        title={'论坛: https://forum.growth.ren'}
        onPress={() => Linking.openURL('https://forum.growth.ren')}
        hideChevron
      />
    </List>
    <Label text="贡献者" />
    <List>
      {contributors.map(contributor =>
        <ListItem
          key={contributor.name}
          title={contributor.name}
          subtitle={contributor.description}
          avatar={{ uri: contributor.avatar }}
          roundAvatar
          hideChevron
        />,
      )}
    </List>
  </ScrollView>
);

export default AboutUs;
