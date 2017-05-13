import axios from 'axios';

axios.defaults.baseURL = 'https://phodal.coding.me/growth/';

axios.defaults.headers.common = ['token'];

class Api {
  static getRoadMapListData = () => (axios.get('awesome/api/all.json'));
}
export default Api;
