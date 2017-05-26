import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import SolutionDetail from '../../../../src/containers/discover/solution-detail/SolutionDetail';

jest.mock('react-native-fs', () => ({
  writeFile: jest.fn(() => Promise.resolve()),
  ExternalStorageDirectoryPath: 'package-path',
}));

it('renders correctly', () => {
  const solutionDetail = renderer.create(
    <SolutionDetail slug={'assemble-static-cms'} />,
  );
  const solutionDetailJson = solutionDetail.toJSON();
  expect(solutionDetailJson).toMatchSnapshot();
});
