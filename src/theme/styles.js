import { Platform, Dimensions } from 'react-native';
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
  discoverGridPositionLeft: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discoverGridPositionRight: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  discoverGridTextItem: {
    color: '#03a9f4',
    ...Platform.select({
      ios: {
        marginTop: 10,
      },
      android: {
        marginTop: -15,
      },
    }),
  },
  discoverGridItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discoverOnlineItem: {
    flex: 1,
  },
  discoverOnlineItemImage: {
    flex: 7,
    width: Dimensions.get('window').width - 30,
    resizeMode: 'stretch',
  },
  discoverOnlineItemTitle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  discoverMoreItem: {
    flex: 1,
  },
  discoverMoreItemImage: {
    flex: 7,
    width: Dimensions.get('window').width - 30,
    resizeMode: 'stretch',
  },
  discoverMoreItemTitle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, .5)',
  },
};
