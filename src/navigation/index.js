/* eslint-disable react/prefer-stateless-function */
import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';
import Home from '../containers/home/Home';
import AppConfig from '../constants/config';
import AppSizes from '../theme/sizes';
import AppStyles from '../theme/styles';
import Community from '../containers/community/Community';
import UserCenter from '../containers/user-center/SkillTree';
import Discover from '../containers/discover/Discover';


const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

class TabIcon extends React.Component {
  render() {
    return (
      <Text style={{ color: this.props.selected ? 'red' : 'black' }}>{this.props.title}</Text>
    );
  }
}

TabIcon.propTypes = { title: PropTypes.string.isRequired, selected: PropTypes.bool };
TabIcon.defaultProps = { title: 'Home', selected: false };


export default Actions.create(
  <Scene key="root" {...AppConfig.navbarProps}>
    <Scene key="tabs" initial={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
      <Scene
        {...navbarPropsTabs}
        key={'home'}
        title={'Growth'}
        icon={TabIcon}
        component={Home}
      />
      <Scene
        {...navbarPropsTabs}
        key={'discover'}
        title={'探索'}
        icon={TabIcon}
        component={Discover}
      />
      <Scene
        {...navbarPropsTabs}
        key={'skillTree'}
        title={'技能树'}
        icon={TabIcon}
        component={UserCenter}
      />
      <Scene
        {...navbarPropsTabs}
        key={'community'}
        title={'社区'}
        icon={TabIcon}
        component={Community}
      />
      <Scene
        {...navbarPropsTabs}
        key={'userCenter'}
        title={'用户中心'}
        icon={TabIcon}
        component={UserCenter}
      />
    </Scene>
  </Scene>,
);
