import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import Article from '../../../../../src/containers/discover/recommend-articles/article/Article';
import HELPER_ARTICLES from '../../../../../src/constants/HELPER_ARTICLES';

jest.mock('react-native-fs', () => ({
  writeFile: jest.fn(() => Promise.resolve()),
  ExternalStorageDirectoryPath: 'package-path',
}));

it('renders correctly', () => {
  const article = renderer.create(
    <Article slug={HELPER_ARTICLES['zh-cn'].hello[0].slug} />,
  );
  const articleJson = article.toJSON();
  expect(articleJson).toMatchSnapshot();
});
