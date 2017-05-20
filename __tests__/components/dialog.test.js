import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Dialog from '../../src/components/dialog';
import TIPS from '../../assets/TIPS';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const dialog = renderer.create(
    <Dialog content={TIPS[0]} />,
  );
  const dialogJson = dialog.toJSON();
  expect(dialogJson).toMatchSnapshot();
});
