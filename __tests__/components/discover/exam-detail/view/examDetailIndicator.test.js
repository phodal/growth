import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ExamDetailIndicator from '../../../../../src/components/discover/exam-detail/view/ExamDetailIndicator';

it('renders correctly', () => {
  const examDetailIndicator = renderer.create(
    <ExamDetailIndicator index={0} />,
  );
  const examDetailIndicatorJson = examDetailIndicator.toJSON();
  expect(examDetailIndicatorJson).toMatchSnapshot();
});
