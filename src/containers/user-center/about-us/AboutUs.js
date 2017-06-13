import React from 'react';
import { Linking, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import AppStyle from '../../../theme/styles';
import Label from '../../../components/Label';
import CONTRIBUTORS from '../../../constants/CONTRIBUTORS';

const avatarOnGitHub = user =>
  `https://avatars.githubusercontent.com/${user}?v=3&s=40`;

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
        title={'QQ 交流群: 529600394'}
        hideChevron
      />
      <ListItem
        title={'论坛: https://forum.growth.ren'}
        onPress={() => Linking.openURL('https://forum.growth.ren')}
        hideChevron
      />
    </List>
    <Label text="贡献者 3.0" />
    <List>
      <ListItem
        title="TBD  "
      />
    </List>

    <Label text="贡献者 1.0 2.0" />
    <List>
      {CONTRIBUTORS.old.contributors.map(contributor =>
        <ListItem
          key={contributor.nickname}
          title={contributor.nickname}
          subtitle={contributor.bio ? contributor.bio : ' '}
          avatar={{ uri: avatarOnGitHub(contributor.github) }}
          onPress={() => {
            if (contributor.profile) {
              Actions.contributorProfile({ contributor });
            }
          }}
          roundAvatar
          hideChevron={!contributor.profile}
        />,
      )}
    </List>
  </ScrollView>
);

export default AboutUs;
