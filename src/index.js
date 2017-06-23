import React from 'react';
import { Router } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import { connect, Provider } from 'react-redux';
import AsyncStorageHelper from './utils/AsyncStorageHelper';

import AppRoutes from './navigation/index';
import AppStyles from './theme/styles';
import configureStore from './redux/store/configureStore';
import GrowthIntro from './containers/GrowthIntro';

const store = configureStore();
const RouterWithRedux = connect()(Router);

export default class Growth extends React.PureComponent {
  static componentName = 'Growth';

  constructor(props) {
    super(props);

    this.state = {
      hasShowIntro: true,
    };
  }

  componentDidMount() {
    // do anything while splash screen keeps, use await to wait for an async task.
    SplashScreen.hide();

    AsyncStorageHelper.get('app.intro.done', (err, result) => {
      if (!result || result !== 'false') {
        this.setState({
          hasShowIntro: false,
        });
      }
    });
  }

  render() {
    if (!this.state.hasShowIntro) {
      return <GrowthIntro />;
    }

    return (
      <Provider store={store}>
        <RouterWithRedux scenes={AppRoutes} style={AppStyles.appContainer} />
      </Provider>
    );
  }
}
