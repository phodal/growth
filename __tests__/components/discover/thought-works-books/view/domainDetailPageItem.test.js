import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import DomainDetailPageItem from '../../../../../src/components/discover/thought-works-books/view/DomainDetailPageItem';
import TWBOOKS from '../../../../../src/constants/TWBOOKS';

it('renders correctly', () => {
  const domainDetailPageItem = renderer.create(
    <DomainDetailPageItem
      content={{ name: '基础篇', books: TWBOOKS['zh-cn'].practical.books.basic }}
    />,
  );
  const domainDetailPageItemJson = domainDetailPageItem.toJSON();
  expect(domainDetailPageItemJson).toMatchSnapshot();
});
