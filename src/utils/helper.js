import { Linking } from 'react-native';

class Helper {
  static openLink(link) {
    Linking.canOpenURL(link).then((supported) => {
      if (supported) {
        Linking.openURL(link);
      }
    });
  }
}
export default Helper;
