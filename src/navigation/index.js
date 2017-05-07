import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import Home from '../containers/home/home';
import AppConfig from '../constants/config';
import AppSizes from '../theme/sizes';
import AppStyles from '../theme/styles';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

export default Actions.create(
  <Scene key="root" {...AppConfig.navbarProps}>
    <Scene key="tabs" initial={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
      <Scene
        {...navbarPropsTabs}
        key={'home'}
        title={'HOME'}
        component={Home}
      />
    </Scene>
  </Scene>,
);
