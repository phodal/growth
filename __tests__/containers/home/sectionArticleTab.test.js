import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import SectionArticleTab from '../../../src/containers/home/sections/SectionArticleTab';
import HELPER_ARTICLES from '../../../src/constants/HELPER_ARTICLES';

it('renders correctly', () => {
  const sectionInfo = {
    title: '构建系统',
    intros: [
      {
        info: { slug: 'build', type: 'desc' },
      },
    ],
    articlesView: [
      {
        title: '构建系统',
        articles: HELPER_ARTICLES['zh-cn'].build,
      },
    ],
    skills: ['build'],
    todoView: [
    ],
  };

  const tree = renderer.create(
    <SectionArticleTab sectionInfo={sectionInfo} />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
