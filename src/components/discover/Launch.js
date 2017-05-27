import { Actions } from 'react-native-router-flux';
import Helper from '../../utils/helper';


const launch = {
  roadmapList: () => {
    Actions.roadmapList();
  },
  roadmapDetail: (caption, content) => {
    Actions.roadmapDetail({ title: caption, timeline: content });
  },
  projectList: () => {
    Actions.projectList();
  },
  projectDetail: (caption, content) => {
    Actions.projectDetail({ title: caption, projects: content });
  },
  toolBox: () => {
    Actions.toolBoxList();
  },
  toolBoxDetail: (path) => {
    Actions.toolBoxDetail({ url: path });
  },
  articleList: () => {
    Actions.articleList();
  },
  articleDetail: (path) => {
    Actions.articleDetail({ uri: path });
  },
  examList: () => {
    Actions.examList();
  },
  examDetail: (quiz) => {
    Actions.examDetail({ quizs: quiz });
  },
  solution: () => {
    Actions.solution();
  },
  solutionDetail: (path) => {
    Actions.solutionDetail({ slug: path });
  },
  thoughtworksBooks: () => {
    Actions.thoughtworksBooks();
  },
  domainDetailPage: (caption, path) => {
    Actions.domainDetailPage({ title: caption, domain: path });
  },
  recommendBooks: () => {
    Actions.recommendBooks();
  },
  recommendArticles: () => {
    Actions.recommendArticles();
  },
  todoLists: () => {
    Actions.todoLists();
  },
  chapterList: () => {
    Actions.chapterList();
  },
  openGitHub: (link) => {
    Helper.openLink(link);
  },
};
export default launch;
