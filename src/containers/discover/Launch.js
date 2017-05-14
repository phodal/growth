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
  openGitHub: (link) => {
    Helper.openLink(link);
  },
};

export default launch;
