import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import Article from '../../../../../src/containers/discover/chapter-list/article/Article';
import TIPS from '../.././../../../src/constants/TIPS';

jest.mock('react-native-fs', () => ({
  writeFile: jest.fn(() => Promise.resolve()),
  ExternalStorageDirectoryPath: 'package-path',
}));

it('renders correctly', () => {
  const article = renderer.create(
    <Article
      url={'https://phodal.coding.me/growth/growth-in-action/chapters/chapter1.txt'}
      dialogContent={TIPS[0]}
    />,
  );
  const articleJson = article.toJSON();
  expect(articleJson).toMatchSnapshot();
});
