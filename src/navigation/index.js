/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
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
import SkillTree from '../containers/skill-tree/SkillTree';
import SkillDetailView from '../containers/skill-tree/SkillDetailView';
import ComingSoonView from '../containers/ComingSoonView';
import Helper from '../utils/helper';
import TabIcon from '../components/TabIcon';
import Practises from '../containers/practises/Practises';
import GrEditor from '../components/GrEditor';
import SectionPage from '../containers/home/sections/SectionPage';
import HtmlView from '../components/HtmlView';
import SectionIntro from '../containers/home/sections/SectionIntro';
import AlgorithmListView from '../containers/practises/algorithm/AlgorithmListView';
import PaperIntroView from '../containers/home/paper/PaperIntroView';
import SectionPageHelper from '../utils/SectionPageHelper';
import ForumDetail from '../containers/community/forum/ForumDetail';
import ForumUserCenter from '../containers/community/forum/ForumUserCenter';
import LeetCodeView from '../containers/practises/leetcode/LeetCodeView';
import FreeBookList from '../containers/discover/free-book-list/FreeBookList';
import AwesomeLists from '../containers/discover/awesomes/AwesomeLists';
import CopyrightView from '../containers/user-center/CopyrightView';
import GrowthView from '../containers/home/GrowthView';
import AwesomesDetail from '../containers/discover/awesomes/AwesomesDetail';
import MoRegexView from '../containers/practises/moregex/MoRegexView';
import RegexListView from '../containers/practises/moregex/RegexListView';
import MoRegexInfoView from '../containers/practises/moregex/MoRegexInfoView';
import BookmarkHelper from '../utils/BookmarkHelper';
import PatternsView from '../containers/practises/patterns/PatternsView';
import PatternDetailView from '../containers/practises/patterns/PatternDetailView';
import AlgorithmDetailView from '../containers/practises/algorithm/AlgorithmDetailView';
import HelpUs from "../containers/home/HelpUs";

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
        title={'首页'}
        iconName={'md-home'}
        iconType={'ionicon'}
        leftTitle={'帮助我们'}
        onLeft={() => Actions.helpUs()}
        leftButtonTextStyle={AppStyles.navbarTitle}
        rightTitle={'购买纸质版'}
        onRight={() => Actions.paperIntroView()}
        rightButtonTextStyle={AppStyles.navbarTitle}
        icon={TabIcon}
        component={Home}
        analyticsDesc={' Home '}
      />
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
      />

      <Scene
        {...navbarPropsTabs}
        key={'community'}
        title={'社区'}
        renderRightButton={() => Helper.gotoLogin()}
        iconName={'md-people'}
        iconType={'ionicon'}
        icon={TabIcon}
        component={Community}
        analyticsDesc={' Community '}
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
        analyticsDesc={' Practises '}
      />

      <Scene
        {...navbarPropsTabs}
        key={'userCenter'}
        title={'用户中心'}
        iconName={'md-apps'}
        iconType={'ionicon'}
        icon={TabIcon}
        component={UserCenter}
        analyticsDesc={' UserCenter '}
      />
    </Scene>

    <Scene
      {...AppConfig.navbarProps}
      key={'skillTree'}
      title={'技能树'}
      rightTitle={'获取专业版'}
      onRight={() => Helper.getProfessionalSkilltree()}
      rightButtonTextStyle={AppStyles.navbarTitle}
      iconName={'md-egg'}
      iconType={'ionicon'}
      icon={TabIcon}
      component={SkillTree}
      analyticsDesc={' SkillTree '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'skillDetail'}
      title={'技能'}
      component={SkillDetailView}
      analyticsDesc={' SkillDetailView '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'growthView'}
      title={'Growth'}
      component={GrowthView}
      analyticsDesc={' GrowthView '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'comingSoon'}
      title={'Coming Soon'}
      component={ComingSoonView}
      rightTitle={'其他功能'}
      rightButtonTextStyle={AppStyles.navbarTitle}
      onRight={() => Helper.getMoreFeatures()}
      analyticsDesc={' ComingSoonView '}
    />

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
      renderRightButton={() => {
        let isRead = false;
        BookmarkHelper.isArticleRead((result) => {
          if (result) {
            isRead = true;
          }
        });

        return (
          <View>
            <TouchableOpacity
              onPress={() => {
                BookmarkHelper.makeBookmark();
              }}
            >
              {
                isRead
                  ? <Icon name="bookmark" size={24} color="#fff" />
                  : <Icon name="bookmark-border" size={24} color="#fff" />
              }
            </TouchableOpacity>
          </View>
        );
      }
      }
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
      key={'aboutUs'}
      title={'关于'}
      component={AboutUs}
      analyticsDesc={' AboutUs '}
    />

    <Scene
      key={'contributorProfile'}
      title={'Contributor Profile'}
      component={ContributorProfile}
      analyticsDesc={' ContributorProfile '}
    />

    <Scene
      {...navbarPropsTabs}
      key={'sectionPage'}
      title={'Section'}
      component={SectionPage}
      renderRightButton={() => (
        <View>
          <TouchableOpacity
            onPress={() => {
              const sectionInfo = SectionPageHelper.getSection();
              const slug = sectionInfo.intros[0].info.slug;
              Actions.sectionIntro({ slug });
            }}
          >
            <Icon name="help-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        )
      }
      analyticsDesc={' SectionPage '}
    />

    <Scene
      key={'sectionIntro'}
      title={'简介'}
      component={SectionIntro}
      analyticsDesc={' SectionIntro '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'paperIntroView'}
      title={'全栈应用开发：精益实践'}
      component={PaperIntroView}
      analyticsDesc={' PaperIntroView '}
    />

    <Scene
      key={'htmlView'}
      component={HtmlView}
      analyticsDesc={' HtmlView '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'algorithmListView'}
      rightTitle={'访问原作者 GitHub'}
      rightButtonTextStyle={AppStyles.navbarTitle}
      onRight={() => Helper.openAlgorithmGitHub()}
      component={AlgorithmListView}
      analyticsDesc={' AlgorithmListView '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'algorithmDetailView'}
      component={AlgorithmDetailView}
      analyticsDesc={' AlgorithmDetailView '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'forumDetail'}
      component={ForumDetail}
      analyticsDesc={' ForumDetail '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'forumUserCenter'}
      title={'用户'}
      component={ForumUserCenter}
      analyticsDesc={' ForumUserCenter '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'leetCodeView'}
      component={LeetCodeView}
      analyticsDesc={' LeetCodeView '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'moRegexView'}
      title={' Mo正则表达式工具 '}
      rightTitle={'正则示例'}
      rightButtonTextStyle={AppStyles.navbarTitle}
      onRight={() => Actions.regexListView()}
      component={MoRegexView}
      analyticsDesc={' MoRegexView '}
    />

    <Scene
      {...AppConfig.navbarProps}
      title={'示例'}
      key={'regexListView'}
      component={RegexListView}
      analyticsDesc={' RegexListView '}
    />

    <Scene
      title={'正则资料（MDN)'}
      key={'moRegexInfoView'}
      component={MoRegexInfoView}
      rightTitle={'访问 MDN'}
      rightButtonTextStyle={AppStyles.navbarTitle}
      onRight={() => Helper.openMDNRegex()}
      analyticsDesc={' MoRegexInfoView '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'freeBookList'}
      title={'在线电子书'}
      rightTitle={'访问原作者 GitHub'}
      rightButtonTextStyle={AppStyles.navbarTitle}
      onRight={() => Helper.openFreeBookGitHub()}
      component={FreeBookList}
      analyticsDesc={' FreeBookList '}
    />

    <Scene
      {...AppConfig.navbarProps}
      title={'设计模式'}
      key={'patternsView'}
      rightTitle={'访问原作者 GitHub'}
      rightButtonTextStyle={AppStyles.navbarTitle}
      onRight={() => Helper.openDPGitHub()}
      component={PatternsView}
      analyticsDesc={' PatternsView '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'patternDetailView'}
      component={PatternDetailView}
      analyticsDesc={' PatternDetailView '}
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

    <Scene
      {...AppConfig.navbarProps}
      title={'版权声明'}
      key={'copyrightView'}
      component={CopyrightView}
      analyticsDesc={' CopyrightView '}
    />

    <Scene
      {...AppConfig.navbarProps}
      title={'帮助我们'}
      key={'helpUs'}
      component={HelpUs}
      analyticsDesc={' HelpUs '}
    />

    <Scene
      {...AppConfig.navbarProps}
      key={'grEditor'}
      duration={500}
      title={'编辑器'}
      rightTitle={'Run'}
      rightButtonTextStyle={AppStyles.navbarTitle}
      onRight={() => GrEditor.runCode()}
      component={GrEditor}
      analyticsDesc={' GrEditor '}
    />

  </Scene>,
);
