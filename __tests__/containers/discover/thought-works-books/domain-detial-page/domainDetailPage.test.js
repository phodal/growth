import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import DomainDetailPage from '../../../../../src/containers/discover/thoughtworks-books/domain-detail-page/DomainDetailPage';

it('renders correctly', () => {
  const domainDetailPage = renderer.create(
    <DomainDetailPage title={'实践'} domain={'practical'} />,
  );
  const domainDetailPageJson = domainDetailPage.toJSON();
  expect(domainDetailPageJson).toMatchSnapshot();
});
