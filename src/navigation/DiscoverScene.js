import React from 'react';
import { Scene } from 'react-native-router-flux';
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
import SolutionDetail from '../containers/discover/solution-detail/SolutionDetail';
import ThoughtworksBooks from '../containers/discover/thoughtworks-books/ThoughtworksBooks';
import DomainDetailPage from '../containers/discover/thoughtworks-books/domain-detail-page/DomainDetailPage';
import RecommendBooks from '../containers/discover/recommend-books/RecommendBooks';
import RecommendBooksDetail from '../containers/discover/recommend-books/article/Article';
import RecommendArticles from '../containers/discover/recommend-articles/RecommendArticles';
import LocalArticleView from '../components/LocalArticleView';
import TodoLists from '../containers/discover/todo-lists/TodoLists';
import TodoList from '../containers/discover/todo-list/TodoList';
import ChapterList from '../containers/discover/chapter-list/ChapterList';
import ChapterListArticle from '../containers/discover/chapter-list/article/Article';
import FreeBookList from '../containers/discover/free-book-list/FreeBookList';
import AwesomeLists from '../containers/discover/awesomes/AwesomeLists';
import AwesomesDetail from '../containers/discover/awesomes/AwesomesDetail';
import Discover from '../containers/discover/Discover';

import AppConfig from '../constants/config';
import AppSizes from '../theme/sizes';
import AppStyles from '../theme/styles';
import Helper from '../utils/helper';
import TabIcon from '../components/TabIcon';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

const DiscoverScene = (
  <Scene
    {...navbarPropsTabs}
    key={'discover'}
    title={'探索'}
    rightTitle={'更多功能'}
    onRight={() => Helper.getMoreFeatures()}
    rightButtonTextStyle={AppStyles.navbarTitle}
    iconName={'md-compass'}
    iconType={'ionicon'}
    icon={TabIcon}
    component={Discover}
    analyticsDesc={' Discover '}
  >
    <Scene
      key={'roadmapList'}
      title={'学习路线'}
      duration={0}
      component={RoadmapList}
      analyticsDesc={' RoadmapList '}
    />

    <Scene
      key={'roadmapDetail'}
      duration={0}
      component={RoadmapDetail}
      analyticsDesc={' RoadmapDetail '}
    />

    <Scene
      key={'projectList'}
      duration={0}
      title={'练手项目'}
      component={ProjectList}
      analyticsDesc={' ProjectList '}
    />

    <Scene
      key={'projectDetail'}
      duration={0}
      component={ProjectDetail}
      analyticsDesc={' ProjectDetail '}
    />

    <Scene
      key={'toolBoxList'}
      duration={0}
      title={'工具箱'}
      component={ToolBoxList}
      analyticsDesc={' ToolBoxList '}
    />

    <Scene
      key={'toolBoxDetail'}
      duration={0}
      title={'工具箱'}
      component={ToolBoxDetail}
      analyticsDesc={' ToolBoxDetail '}
    />

    <Scene
      key={'articleList'}
      duration={0}
      title={'文章推荐'}
      component={ArticleList}
      analyticsDesc={' ArticleList '}
    />

    <Scene
      key={'articleDetail'}
      duration={0}
      title={'文章详情'}
      component={ArticleDetail}
      analyticsDesc={' ArticleDetail '}
    />

    <Scene
      key={'examList'}
      duration={0}
      title={'技能测验'}
      component={ExamList}
      analyticsDesc={' ExamList '}
    />

    <Scene
      key={'examDetail'}
      duration={0}
      hideNavBar
      component={ExamDetail}
      analyticsDesc={' ExamDetail '}
    />

    <Scene
      key={'solution'}
      duration={0}
      title={'解决方案'}
      component={Solution}
      analyticsDesc={' Solution '}
    />

    <Scene
      key={'solutionDetail'}
      duration={0}
      title={'解决方案'}
      component={SolutionDetail}
      analyticsDesc={' SolutionDetail '}
    />

    <Scene
      key={'thoughtworksBooks'}
      duration={0}
      title={'ThoughtWorks读书路线'}
      component={ThoughtworksBooks}
      analyticsDesc={' ThoughtworksBooks '}
    />

    <Scene
      key={'domainDetailPage'}
      duration={0}
      component={DomainDetailPage}
      analyticsDesc={' DomainDetailPage '}
    />

    <Scene
      key={'recommendBooks'}
      duration={0}
      title={'推荐书籍'}
      component={RecommendBooks}
      analyticsDesc={' RecommendBooks '}
    />

    <Scene
      key={'recommendBooksDetail'}
      duration={0}
      title={'书评'}
      component={RecommendBooksDetail}
      analyticsDesc={' RecommendBooksDetail '}
    />

    <Scene
      key={'recommendArticles'}
      duration={0}
      title={'推荐文章'}
      component={RecommendArticles}
      analyticsDesc={' RecommendArticles '}
    />

    <Scene
      key={'localArticleView'}
      duration={0}
      title={'文章'}
      component={LocalArticleView}
      analyticsDesc={' LocalArticleView '}
    />

    <Scene
      key={'todoLists'}
      duration={0}
      title={'待办事项'}
      component={TodoLists}
      analyticsDesc={' TodoLists '}
    />

    <Scene
      key={'todoList'}
      duration={0}
      title={'Todo'}
      component={TodoList}
      analyticsDesc={' TodoList '}
    />

    <Scene
      key={'chapterList'}
      duration={0}
      component={ChapterList}
      analyticsDesc={' ChapterList '}
    />

    <Scene
      key={'chapterListArticle'}
      duration={0}
      title={'章节详情'}
      component={ChapterListArticle}
      analyticsDesc={' ChapterListArticle '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'freeBookList'}
      title={'在线电子书'}
      rightTitle={'访问 GitHub'}
      component={FreeBookList}
      analyticsDesc={' FreeBookList '}
    />

    <Scene
      {...AppConfig.navbarProps}
      title={'Awesomes'}
      key={'awesomeLists'}
      component={AwesomeLists}
      analyticsDesc={' AwesomeLists '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'awesomesDetail'}
      component={AwesomesDetail}
      analyticsDesc={' AwesomesDetail '}
    />
  </Scene>
);

export default DiscoverScene;
