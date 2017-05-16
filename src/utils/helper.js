import { Platform, Linking } from 'react-native';

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
}
export default Helper;
