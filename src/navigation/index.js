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
import RoadmapList from '../containers/discover/roadmap-list/RoadmapList';
import RoadmapDetail from '../containers/discover/roadmap-detail/RoadmapDetail';
import ProjectList from '../containers/discover/project-list/ProjectList';
import ProjectDetail from '../containers/discover/project-detail/ProjectDetail';
import ToolBoxList from '../containers/discover/toolbox-list/ToolBoxList';
import ArticleList from '../containers/discover/article-list/ArticleList';
import ExamList from '../containers/discover/exam-list/ExamList';
import Solution from '../containers/discover/solution/Solution';
import ThoughtworksBooks from '../containers/discover/thoughtworks-books/ThoughtworksBooks';
import RecommendBooks from '../containers/discover/recommend-books/RecommendBooks';
import RecommendArticles from '../containers/discover/recommend-articles/RecommendArticles';
import TodoLists from '../containers/discover/todo-lists/TodoLists';
import ChapterList from '../containers/discover/chapter-list/ChapterList';
import SkillTree from '../containers/skill-tree/SkillTree';
import SkillDetailView from '../containers/skill-tree/SkillDetailView';
import ComingSoonView from '../containers/ComingSoonView';
import Helper from '../utils/helper';


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
        rightTitle={'购买纸质版'}
        onRight={() => Actions.comingSoon()}
        rightButtonTextStyle={AppStyles.navbarTitle}
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
        rightTitle={'获取专业版'}
        onRight={() => Helper.getProfessionalSkilltree()}
        rightButtonTextStyle={AppStyles.navbarTitle}
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

    <Scene
      {...navbarPropsTabs}
      key={'skillDetail'}
      title={'技能'}
      component={SkillDetailView}
    />

    <Scene
      key={'comingSoon'}
      title={'Coming Soon'}
      component={ComingSoonView}
    />

    <Scene
      key={'roadmapList'}
      title={'学习路线'}
      component={RoadmapList}
    />

    <Scene
      key={'roadmapDetail'}
      component={RoadmapDetail}
    />

    <Scene
      key={'projectList'}
      title={'练手项目'}
      component={ProjectList}
    />

    <Scene
      key={'projectDetail'}
      component={ProjectDetail}
    />

    <Scene
      key={'toolBoxList'}
      title={'工具箱'}
      component={ToolBoxList}
    />

    <Scene
      key={'articleList'}
      title={'文章推荐'}
      component={ArticleList}
    />

    <Scene
      key={'examList'}
      title={'技能测验'}
      component={ExamList}
    />
    <Scene
      key={'solution'}
      title={'解决方案'}
      component={Solution}
    />

    <Scene
      key={'thoughtworksBooks'}
      title={'ThoughtWorks读书路线'}
      component={ThoughtworksBooks}
    />

    <Scene
      key={'recommendBooks'}
      title={'推荐书籍'}
      component={RecommendBooks}
    />

    <Scene
      key={'recommendArticles'}
      title={'推荐文章'}
      component={RecommendArticles}
    />

    <Scene
      key={'todoLists'}
      title={'待办事项'}
      component={TodoLists}
    />

    <Scene
      key={'chapterList'}
      title={'ChapterList'}
      component={ChapterList}
    />

  </Scene>,
);
