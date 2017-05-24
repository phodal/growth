import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import TimeLineView from '../../../../../src/components/discover/roadmap-detail/view/TimeLineView';


it('renders correctly', () => {
  const timeLine = renderer.create(
    <TimeLineView
      title={'title'}
      content={'23333333'}
      itemIndex={0}
      key={'key'}
    />,
  );
  const timeLineJson = timeLine.toJSON();
  expect(timeLineJson).toMatchSnapshot();
});
