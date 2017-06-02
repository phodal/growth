import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Actions, Scene } from 'react-native-router-flux';

import SectionGrowthTab from '../../../src/containers/home/sections/SectionGrowthTab';
import HELPER_ARTICLES from '../../../src/constants/HELPER_ARTICLES';
import HtmlView from '../../../src/components/HtmlView';
import RecommendBooks from '../../../src/containers/discover/recommend-books/RecommendBooks';
import BOOKS from '../../../src/constants/BOOKS';

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

describe('test showGrowthView', () => {
  const scenesData = (
    <Scene
      key="root"
    >
      <Scene
        key={'htmlView'}
        title={'技能'}
        component={HtmlView}
      />
      <Scene
        key={'recommendBooks'}
        title={'技能'}
        component={RecommendBooks}
      />
    </Scene>
  );
  Actions.create(scenesData);
  Actions.callback = () => { };

  it('test for general', () => {
    const spy = jest.spyOn(Actions, 'htmlView');
    SectionGrowthTab.showGrowthView({
      title: 'Debug',
      info: { slug: 'debug', type: 'general', domain: 'frontend' },
    });
    expect(spy).toBeCalledWith({ domain: 'frontend', isFullSlug: true, slug: '/growth-content/growth/frontend/debug.html', title: undefined });
  });

  it('test for book', () => {
    const spy = jest.spyOn(Actions, 'recommendBooks');
    SectionGrowthTab.showGrowthView({
      title: '书单',
      info: { type: 'book', domain: 'coding' },
    });
    expect(spy).toBeCalledWith({ data: [{ books: BOOKS['zh-cn'].coding, name: '书单' }] });
  });
});
