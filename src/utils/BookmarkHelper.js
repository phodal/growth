import { AsyncStorage } from 'react-native';

const STORE_KEY = 'bookmark';

export default class BookmarkHelper {
  slug: null;

  static getSlug() {
    return this.slug;
  }

  static setSlug(slug) {
    this.slug = slug;
  }

  static makeBookmark() {
    const slug = this.slug;
    AsyncStorage.getItem(STORE_KEY, (result) => {
      console.log(result);
      if (!result) {
        return AsyncStorage.setItem(STORE_KEY, JSON.stringify([slug]));
      }

      const data = JSON.parse(result);
      if (data.includes(slug)) {
        return AsyncStorage.setItem(STORE_KEY, JSON.stringify(data.push(slug)));
      }

      return null;
    });
  }

  static isArticleRead(callback) {
    const slug = this.slug;
    AsyncStorage.getItem(STORE_KEY, (result) => {
      if (!result) {
        return callback(false);
      }

      const data = JSON.parse(result);
      if (data.includes(slug)) {
        return callback(true);
      }

      return callback(false);
    });
  }
}
