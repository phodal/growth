/* eslint-disable react/prefer-stateless-function */
import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions, Scene } from 'react-native-router-flux';
import Home from '../containers/home/Home';
import AppConfig from '../constants/config';
import AppSizes from '../theme/sizes';
import AppStyles from '../theme/styles';
import AppColors from '../theme/colors';
import Community from '../containers/community/Community';
import UserCenter from '../containers/user-center/UserCenter';
import Discover from '../containers/discover/Discover';
import SkillTree from '../containers/skill-tree/SkillTree';


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
      <View>
        <Icon name={this.props.iconName} type={this.props.iconType} color={this.props.selected ? AppColors.brand.primary : '#767676'} />
        <Text style={{ color: this.props.selected ? AppColors.brand.primary : '#767676' }}>{this.props.title}</Text>
      </View>
    );
  }
}


TabIcon.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired };

TabIcon.defaultProps = { title: 'Home', selected: false, iconName: 'home', iconType: 'ionicon' };


export default Actions.create(
  <Scene key="root" {...AppConfig.navbarProps}>
    <Scene key="tabs" initial={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
      <Scene
        {...navbarPropsTabs}
        key={'home'}
        title={'Growth'}
        iconName={'md-home'}
        iconType={'ionicon'}
        icon={TabIcon}
        component={Home}
      />
      <Scene
        {...navbarPropsTabs}
        key={'discover'}
        title={'探索'}
        iconName={'md-compass'}
        iconType={'ionicon'}
        icon={TabIcon}
        component={Discover}
      />
      <Scene
        {...navbarPropsTabs}
        key={'skillTree'}
        title={'技能树'}
        iconName={'md-egg'}
        iconType={'ionicon'}
        icon={TabIcon}
        component={SkillTree}
      />
      <Scene
        {...navbarPropsTabs}
        key={'community'}
        title={'社区'}
        iconName={'md-people'}
        iconType={'ionicon'}
        icon={TabIcon}
        component={Community}
      />
      <Scene
        {...navbarPropsTabs}
        key={'userCenter'}
        title={'用户中心'}
        iconName={'md-person'}
        iconType={'ionicon'}
        icon={TabIcon}
        component={UserCenter}
      />
    </Scene>
  </Scene>,
);
