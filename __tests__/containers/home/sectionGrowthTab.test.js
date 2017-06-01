import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import SectionGrowthTab from '../../../src/containers/home/sections/SectionGrowthTab';
import HELPER_ARTICLES from '../../../src/constants/HELPER_ARTICLES';

it('renders correctly', () => {
  const sectionInfo = {
    title: '后台',
    intros: [
      {
        info: { slug: 'backend', type: 'desc' },
      },
    ],
    articlesView: [
      {
        title: '后台',
        articles: HELPER_ARTICLES['zh-cn'].backend,
      },
    ],
    skills: ['backend'],
    growthView: [
      {
        title: '后台',
        sections: [
          {
            title: '服务框架',
            info: { slug: 'framework', type: 'general', domain: 'backend' },
          },
          {
            title: '应用框架',
            info: { slug: 'services', type: 'general', domain: 'backend' },
          },
        ],
      },
    ],
    todoView: [{
      title: '后台',
      info: { domain: 'backend' },
    }],
  };
  const tree = renderer.create(
    <SectionGrowthTab sectionInfo={sectionInfo} />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
