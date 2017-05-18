import React from 'react';
import { Router } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';

import AppRoutes from './navigation/index';
import AppStyles from './theme/styles';


export default class Growth extends React.PureComponent {
  static componentName = 'Growth';

  componentDidMount() {
    // do anything while splash screen keeps, use await to wait for an async task.
    SplashScreen.hide();
  }

  render() {
    return (
      <Router scenes={AppRoutes} style={AppStyles.appContainer} />
    );
  }
}
