import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ArticleDetail from '../../../../src/containers/discover/article-detail/ArticleDetail';
import TIPS from '../../../../src/constants/TIPS';

jest.mock('react-native-fs', () => ({
  writeFile: jest.fn(() => Promise.resolve()),
  ExternalStorageDirectoryPath: 'package-path',
}));

it('renders correclty', () => {
  const articleDetail = renderer.create(
    <ArticleDetail uri={'articles/javascript.txt'} dialogContent={TIPS[0]} />,
  );
  const articleDetailJson = articleDetail.toJSON();
  expect(articleDetailJson).toMatchSnapshot();
});
