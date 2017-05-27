import 'react-native';
import React, {} from 'react';
import renderer from 'react-test-renderer';
import ThoughtworksBooks from '../../../../src/containers/discover/thoughtworks-books/ThoughtworksBooks';

it('renders correctly', () => {
  const thoughtworksBooks = renderer.create(
    <ThoughtworksBooks />,
  );
  const thoughtworksBooksJson = thoughtworksBooks.toJSON();
  expect(thoughtworksBooksJson).toMatchSnapshot();
});
