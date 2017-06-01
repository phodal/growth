import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../../../../src/containers/discover/todo-list/TodoList';
import TODO_LISTS from '../../../../src/constants/TODO_LISTS';

it('renders correctly', () => {
  const todoList = renderer.create(
    <TodoList data={TODO_LISTS['zh-cn'].hello} />,
  );
  const todoListJson = todoList.toJSON();
  expect(todoListJson).toMatchSnapshot();
});
