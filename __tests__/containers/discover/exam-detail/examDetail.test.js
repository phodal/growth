import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ExamDetail from '../../../../src/containers/discover/exam-detail/ExamDetail';
import QUIZS from '../../../../src/constants/QUIZS';

it('renders correctly', () => {
  const examDetail = renderer.create(
    <ExamDetail quizs={QUIZS.fe} test />,
  );
  const examDetailJson = examDetail.toJSON();
  expect(examDetailJson).toMatchSnapshot();
});
