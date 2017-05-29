import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import TodoListItem from '../../../../../src/components/discover/todo-list/view/TodoListItem';
import TODO_LISTS_ITEM from '../../../../../src/constants/TODO_LISTS_ITEM';

it('renders correctly', () => {
  const data = TODO_LISTS_ITEM[0].basic[0];
  const todoListItem = renderer.create(
    <TodoListItem
      title={data.title}
      click={() => {}}
      checked
    />,
  );
  const todoListItemJson = todoListItem.toJSON();
  expect(todoListItemJson).toMatchSnapshot();
});
