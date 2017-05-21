import axios from 'axios';

axios.defaults.baseURL = 'https://phodal.coding.me/growth/';

axios.defaults.headers.common = ['token'];

class Api {
  static getRoadMapListData = () => (axios.get('awesome/api/all.json'));

  static getProjectListData = () => (axios.get('project/api/all.json'));

  static getToolBoxData = () => (axios.get('toolbox/api/all.json'));

  static getToolBoxDetailData = url => (axios.get('toolbox/'.concat(url)));

  static getArticleListData = () => (axios.get('articles/api/all.json'));

  static getArticleDetailData = url => (axios.get('articles/'.concat(url)));
}
export default Api;
