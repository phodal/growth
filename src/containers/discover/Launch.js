import { Actions } from 'react-native-router-flux';

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
  toolBox: () => {
    Actions.toolBoxList();
  },
  articleList: () => {
    Actions.articleList();
  },
  examList: () => {
    Actions.examList();
  },
  solution: () => {
    Actions.solution();
  },
  thoughtworksBooks: () => {
    Actions.thoughtworksBooks();
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
  openGitHub: (url) => {
    Actions.growthWebView({ link: url });
  },
};

export default launch;
