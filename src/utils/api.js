import axios from 'axios';

axios.defaults.baseURL = 'https://phodal.coding.me/growth/';

axios.defaults.headers.common = ['token'];

class Api {
  static ROADMAP_LIST = 'awesome/api/all.json';
  static PROJECT_LIST = 'project/api/all.json';
  static TOOLBOX_LIST = 'toolbox/api/all.json';
  static TOOLBOX_DETAIL = 'toolbox/';
  static ARTICLE_LIST = 'articles/api/all.json';
  static ARTICLE_DETAIL = 'articles/';
  static GROWTH_IN_ACTION = 'growth-in-action/api/all.json';
  static IDEA_BOOK = 'ideabook/api/all.json';
  static FE = 'fe/api/all.json';

  static get = url => axios.get(url);

}
export default Api;
