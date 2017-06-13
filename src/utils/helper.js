import React from 'react';
import { Platform, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class Helper {
  static openLink(link) {
    Linking.canOpenURL(link).then((supported) => {
      if (supported) {
        Linking.openURL(link);
      }
    });
  }

  static getProfessionalSkilltree() {
    let url = 'http://phodal.github.io/motree';
    if (Platform.OS === 'android') {
      url = 'market://details?id=ren.growth.skilltree';
    } else if (Platform.OS === 'ios') {
      url = 'https://itunes.apple.com/cn/app/growth-ji-neng-shu-phodal/id1193898864?mt=8';
    }

    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      }
    });
  }

  static getMoreFeatures() {
    Helper.openLink('https://github.com/phodal/growth-ng/issues');
  }

  static gotoUserCenter() {
    return (
      <Icon
        name={'md-color-palette'} type={'ionicon'} color={'#fff'}
        onPress={() => Actions.userCenter()}
      />
    );
  }

  static gotoLogin() {
    return (
      <Icon
        name={'md-person'} type={'ionicon'} color={'#fff'}
        onPress={() => Actions.forumUserCenter()}
      />
    );
  }
}

export default Helper;
