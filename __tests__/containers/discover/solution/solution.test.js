import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import Solution from '../../../../src/containers/discover/solution/Solution';

it('renders correctly', () => {
  const solution = renderer.create(
    <Solution />,
  );
  const solutionJson = solution.toJSON();
  expect(solutionJson).toMatchSnapshot();
});
