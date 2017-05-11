import { Platform } from 'react-native';
import Fonts from './fonts';
import Colors from './colors';

export default {
  appContainer: {
    backgroundColor: '#000',
  },
  navbar: {
    backgroundColor: Colors.brand.primary,
    borderBottomWidth: 0,
  },
  navbarTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
  },
  navbarButton: {
    tintColor: '#ffffff',
  },
  tabbar: {
    backgroundColor: Colors.tabbar.background,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
  },
  discoverParentStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  discoverTitle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discoverTextColor: {
    color: '#03a9f4',
  },
  discoverFirstGrid: {
    flex: 2,
    flexDirection: 'row',
  },
  discoverOtherGrid: {
    flex: 2,
    flexDirection: 'row',
    marginTop: 15,
  },
  discoverGridFirstItem: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  discoverGrideItem: {
    color: '#333',
    ...Platform.select({
      ios: {
        marginTop: 10,
      },
      android: {
        marginTop: -15,
      },
    }),
  },
  discoverGridLastItem: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
