import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../../../../src/containers/discover/todo-list/TodoList';
import TODO_LISTS_ITEM from '../../../../src/constants/TODO_LISTS_ITEM';

it('renders correctly', () => {
  const todoList = renderer.create(
    <TodoList data={TODO_LISTS_ITEM[0]} />,
  );
  const todoListJson = todoList.toJSON();
  expect(todoListJson).toMatchSnapshot();
});
