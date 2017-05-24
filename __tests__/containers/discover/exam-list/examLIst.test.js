import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ExamList from '../../../../src/containers/discover/exam-list/ExamList';

it('renders correctly', () => {
  const examList = renderer.create(
    <ExamList />,
  );
  const examListJson = examList.toJSON();
  expect(examListJson).toMatchSnapshot();
});
