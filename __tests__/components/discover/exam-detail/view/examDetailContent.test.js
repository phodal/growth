import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ExamDetailContent from '../../../../../src/components/discover/exam-detail/view/ExamDetailContent';
import QUIZS from '../../../../../assets/data/QUIZS';

it('renders correctly', () => {
  const examDetailContent = renderer.create(
    <ExamDetailContent quizs={QUIZS.fe} test />,
  );
  const examDetailContentJson = examDetailContent.toJSON();
  expect(examDetailContentJson).toMatchSnapshot();
});
