import React from 'react';
import { Router } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import { connect, Provider } from 'react-redux';

import AppRoutes from './navigation/index';
import AppStyles from './theme/styles';
import configureStore from './redux/store/configureStore';

const store = configureStore();
const RouterWithRedux = connect()(Router);

export default class Growth extends React.PureComponent {
  static componentName = 'Growth';

  componentDidMount() {
    // do anything while splash screen keeps, use await to wait for an async task.
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={AppRoutes} style={AppStyles.appContainer} />
      </Provider>
    );
  }
}
