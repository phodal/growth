
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Growth from '../src/index';

jest.mock('react-native-fs', () => ({
  writeFile: jest.fn(() => Promise.resolve()),
  ExternalStorageDirectoryPath: 'package-path',
}));


describe('test index', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Growth />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});
