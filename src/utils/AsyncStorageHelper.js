import { AsyncStorage } from 'react-native';

class AsyncStorageHelper {

  static add(key, value, call) {
    AsyncStorage.setItem(key, value, () => (
      AsyncStorage.getItem(key, (err, result) => (
        call(result)))));
  }

  static set(key, value) {
    AsyncStorage.setItem(key, value);
  }

  static get(key, callback) {
    AsyncStorage.getItem(key, callback);
  }

  static del(key, call) {
    AsyncStorage.removeItem(
      key, () => (
        this.query(key, call)));
  }

  static update(key, value, call) {
    AsyncStorage.mergeItem(
      key, value, () => (
        this.query(key, call)));
  }

  static query(key, call) {
    AsyncStorage.getItem(
      key, (err, result) => (
        call(result)));
  }

}
export default AsyncStorageHelper;
