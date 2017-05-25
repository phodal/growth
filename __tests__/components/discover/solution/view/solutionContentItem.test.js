import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import SolutionContentItem from '../../../../../src/components/discover/solution/view/SolutionContentItem';
import SOLUTIONS from '../../../../../src/constants/SOLUTIONS';

it('renders correctly', () => {
  const data = SOLUTIONS[0];
  const solutionContentItem = renderer.create(
    <SolutionContentItem
      name={data.name}
      description={data.description}
      stack={data.stacks}
    />,
  );
  const solutionContentItemJson = solutionContentItem.toJSON();
  expect(solutionContentItemJson).toMatchSnapshot();
});
