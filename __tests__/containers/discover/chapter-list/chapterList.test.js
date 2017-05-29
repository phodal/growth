import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ChapterList from '../../../../src/containers/discover/chapter-list/ChapterList';
import Api from '../../../../src/utils/api';
import TIPS from '../.././../../src/constants/TIPS';

it('renders correctly', () => {
  const chapterList = renderer.create(
    <ChapterList url={Api.GROWTH_IN_ACTION} dialogContent={TIPS[0]} />,
  );
  const chapterListJson = chapterList.toJSON();
  expect(chapterListJson).toMatchSnapshot();
});
