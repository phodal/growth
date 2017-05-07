import React from 'react';
import { Router } from 'react-native-router-flux';

import AppRoutes from './navigation/index';
import AppStyles from './theme/styles';

export default function Growth() {
  return (
    <Router scenes={AppRoutes} style={AppStyles.appContainer} />
  );
}
