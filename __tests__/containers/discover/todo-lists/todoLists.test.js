import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import TodoLists from '../../../../src/containers/discover/todo-lists/TodoLists';

it('renders correctly', () => {
  const todoLists = renderer.create(
    <TodoLists />,
  );
  const todoListsJson = todoLists.toJSON();
  expect(todoListsJson).toMatchSnapshot();
});
