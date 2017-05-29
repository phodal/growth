import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import DoneListTitle from '../../../../../src/components/discover/todo-list/view/DoneListTitle';

it('renders correctly', () => {
  const doneListTitle = renderer.create(
    <DoneListTitle />,
  );
  const doneListTitleJson = doneListTitle.toJSON();
  expect(doneListTitleJson).toMatchSnapshot();
});
