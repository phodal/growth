import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LocalArticleView from '../../../../../src/components/LocalArticleView';
import HELPER_ARTICLES from '../../../../../src/constants/HELPER_ARTICLES';

jest.mock('react-native-fs', () => ({
  writeFile: jest.fn(() => Promise.resolve()),
  ExternalStorageDirectoryPath: 'package-path',
}));

it('renders correctly', () => {
  const article = renderer.create(
    <LocalArticleView slug={HELPER_ARTICLES['zh-cn'].hello[0].slug} />,
  );
  const articleJson = article.toJSON();
  expect(articleJson).toMatchSnapshot();
});
