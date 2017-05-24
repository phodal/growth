import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ExamDetailBack from '../../../../../src/components/discover/exam-detail/view/ExamDetailBack';

it('renders correctly', () => {
  const examDetailBack = renderer.create(
    <ExamDetailBack />,
  );
  const examDetailBackJson = examDetailBack.toJSON();
  expect(examDetailBackJson).toMatchSnapshot();
});
