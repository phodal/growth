/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import Home from '../containers/home/Home';
import AppConfig from '../constants/config';
import AppSizes from '../theme/sizes';
import AppStyles from '../theme/styles';
import Community from '../containers/community/Community';
import UserCenter from '../containers/user-center/UserCenter';
import AboutUs from '../containers/user-center/about-us/AboutUs';
import ContributorProfile from '../containers/user-center/about-us/ContributorProfile';
import Discover from '../containers/discover/Discover';
import RoadmapList from '../containers/discover/roadmap-list/RoadmapList';
import RoadmapDetail from '../containers/discover/roadmap-detail/RoadmapDetail';
import ProjectList from '../containers/discover/project-list/ProjectList';
import ProjectDetail from '../containers/discover/project-detail/ProjectDetail';
import ToolBoxList from '../containers/discover/toolbox-list/ToolBoxList';
import ToolBoxDetail from '../containers/discover/toolbox-detail/ToolBoxDetail';
import ArticleList from '../containers/discover/article-list/ArticleList';
import ArticleDetail from '../containers/discover/article-detail/ArticleDetail';
import ExamList from '../containers/discover/exam-list/ExamList';
import ExamDetail from '../containers/discover/exam-detail/ExamDetail';
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
import TabIcon from '../components/TabIcon';
import Practises from '../containers/practises/Practises';
import GrEditor from '../components/GrEditor';


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
        title={'Growth'}
        iconName={'md-home'}
        iconType={'ionicon'}
        leftTitle={'用户中心'}
        renderLeftButton={() => Helper.gotoUserCenter()}
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
        key={'practises'}
        title={'练习'}
        iconName={'md-bonfire'}
        iconType={'ionicon'}
        icon={TabIcon}
        rightTitle={'编辑器'}
        onRight={() => Actions.grEditor()}
        rightButtonTextStyle={AppStyles.navbarTitle}
        component={Practises}
      />
    </Scene>


    <Scene
      {...navbarPropsTabs}
      key={'userCenter'}
      title={'用户中心'}
      component={UserCenter}
    />

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
      duration={0}
      component={RoadmapList}
    />

    <Scene
      key={'roadmapDetail'}
      duration={0}
      component={RoadmapDetail}
    />

    <Scene
      key={'projectList'}
      duration={0}
      title={'练手项目'}
      component={ProjectList}
    />

    <Scene
      key={'projectDetail'}
      duration={0}
      component={ProjectDetail}
    />

    <Scene
      key={'toolBoxList'}
      duration={0}
      title={'工具箱'}
      component={ToolBoxList}
    />

    <Scene
      key={'toolBoxDetail'}
      duration={0}
      title={'工具箱'}
      component={ToolBoxDetail}
    />

    <Scene
      key={'articleList'}
      duration={0}
      title={'文章推荐'}
      component={ArticleList}
    />

    <Scene
      key={'articleDetail'}
      duration={0}
      title={'文章详情'}
      component={ArticleDetail}
    />

    <Scene
      key={'examList'}
      duration={0}
      title={'技能测验'}
      component={ExamList}
    />

    <Scene
      key={'examDetail'}
      duration={0}
      hideNavBar
      component={ExamDetail}
    />

    <Scene
      key={'solution'}
      duration={0}
      title={'解决方案'}
      component={Solution}
    />

    <Scene
      key={'thoughtworksBooks'}
      duration={0}
      title={'ThoughtWorks读书路线'}
      component={ThoughtworksBooks}
    />

    <Scene
      key={'recommendBooks'}
      duration={0}
      title={'推荐书籍'}
      component={RecommendBooks}
    />

    <Scene
      key={'recommendArticles'}
      duration={0}
      title={'推荐文章'}
      component={RecommendArticles}
    />

    <Scene
      key={'todoLists'}
      duration={0}
      title={'待办事项'}
      component={TodoLists}
    />

    <Scene
      key={'chapterList'}
      duration={0}
      title={'ChapterList'}
      component={ChapterList}
    />

    <Scene
      key={'aboutUs'}
      title={'关于'}
      component={AboutUs}
    />

    <Scene
      key={'contributorProfile'}
      title={'Contributor Profile'}
      component={ContributorProfile}
    />

    <Scene
      {...navbarPropsTabs}
      key={'grEditor'}
      duration={500}
      title={'编辑器'}
      rightTitle={'Run'}
      rightButtonTextStyle={AppStyles.navbarTitle}
      onRight={() => GrEditor.runCode()}
      component={GrEditor}
    />

  </Scene>,
);
