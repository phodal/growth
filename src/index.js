import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import { connect, Provider } from 'react-redux';
import AppIntro from 'react-native-app-intro';
import AsyncStorageHelper from './utils/AsyncStorageHelper';

import AppRoutes from './navigation/index';
import AppStyles from './theme/styles';
import configureStore from './redux/store/configureStore';

const store = configureStore();
const RouterWithRedux = connect()(Router);


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});


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
      if (result !== 'true') {
        this.setState({
          hasShowIntro: false,
        });
      }
    });
  }

  onSkipBtnHandle = () => {
    this.setState({
      hasShowIntro: true,
    });
    AsyncStorageHelper.set('app.intro.done', 'true');
  };

  doneBtnHandle = () => {
    this.setState({
      hasShowIntro: true,
    });
    AsyncStorageHelper.set('app.intro.done', 'true');
  };

  render() {
    if (!this.state.hasShowIntro) {
      return (<AppIntro
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        skipBtnLabel={'跳过'}
        doneBtnLabel={'已阅'}
      >
        <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
          <View level={10}><Text style={styles.text}>Page 1</Text></View>
          <View level={15}><Text style={styles.text}>Page 1</Text></View>
          <View level={8}><Text style={styles.text}>Page 1</Text></View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={-10}><Text style={styles.text}>Page 2</Text></View>
          <View level={5}><Text style={styles.text}>Page 2</Text></View>
          <View level={20}><Text style={styles.text}>Page 2</Text></View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
          <View level={8}><Text style={styles.text}>Page 3</Text></View>
          <View level={0}><Text style={styles.text}>Page 3</Text></View>
          <View level={-10}><Text style={styles.text}>Page 3</Text></View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={5}><Text style={styles.text}>Page 4</Text></View>
          <View level={10}><Text style={styles.text}>Page 4</Text></View>
          <View level={15}><Text style={styles.text}>Page 4</Text></View>
        </View>
      </AppIntro>);
    }

    return (
      <Provider store={store}>
        <RouterWithRedux scenes={AppRoutes} style={AppStyles.appContainer} />
      </Provider>
    );
  }
}
