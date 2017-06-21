/* global __DEV__ */
import AppStyles from '../theme/styles';
import AppSizes from '../theme/sizes';
import AppColors from '../theme/colors';

export default {
  gaTrackingId: (__DEV__) ? 'UA-71907748-6' : 'UA-71907748-1',
  navbarProps: {
    hideNavBar: false,
    titleStyle: AppStyles.navbarTitle,
    navigationBarStyle: AppStyles.navbar,
    leftButtonIconStyle: AppStyles.navbarButton,
    rightButtonIconStyle: AppStyles.navbarButton,
    sceneStyle: {
      backgroundColor: AppColors.background,
      paddingTop: AppSizes.navbarHeight,
    },
  },
  basicNavbarProps: {
    hideNavBar: true,
    sceneStyle: {
      backgroundColor: AppColors.background,
      paddingTop: AppSizes.basicNavbarHeight,
    },
  },
};
