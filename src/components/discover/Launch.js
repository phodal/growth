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
  recommendBooks: (books) => {
    Actions.recommendBooks(books);
  },
  recommendBooksDetail: (path) => {
    Actions.recommendBooksDetail({ slug: path });
  },
  recommendArticles: () => {
    Actions.recommendArticles();
  },
  localArticleView: (path) => {
    Actions.localArticleView({ slug: path });
  },
  todoLists: () => {
    Actions.todoLists();
  },
  todoList: (todo) => {
    Actions.todoList({ data: todo });
  },
  chapterList: (caption, path) => {
    Actions.chapterList({ title: caption, url: path });
  },
  chapterListArticle: (path, dialog) => {
    Actions.chapterListArticle({ url: path, dialogContent: dialog });
  },
  freeBookList: () => {
    Actions.freeBookList();
  },
  awesomeLists: () => {
    Actions.awesomeLists();
  },
};
export default launch;
