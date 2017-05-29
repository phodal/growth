import AsyncStorageHelper from './AsyncStorageHelper';

export const KEY = 'todo-';

class TodoListHelper {
  static key(value) {
    return KEY.concat(value.name);
  }

  static init(key, value, call) {
    AsyncStorageHelper.query(
      key, (result) => {
        if (!result) {
          AsyncStorageHelper.add(
            key, JSON.stringify(value), data => (
              call(JSON.parse(data))));
        } else {
          call(JSON.parse(result));
        }
      });
  }

  static changeTodoState(key, value, call) {
    AsyncStorageHelper.update(
      key, JSON.stringify(value), data => (
        call(JSON.parse(data))));
  }

}
export default TodoListHelper;
