/* eslint-disable global-require,no-unused-vars,class-methods-use-this */
import React, { Component } from 'react';
import { Dimensions, View, WebView, StyleSheet, Platform } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

import AppSizes from '../../../theme/sizes';


const styles = StyleSheet.create({
  container: {

  },
  background: {
    backgroundColor: 'transparent',
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.85,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
});

const webViewWidth = Dimensions.get('window').width;

class MoRegexView extends Component {
  static componentName = 'MoRegexView';

  constructor() {
    super();
    this.webview = null;
  }

  handleMessage = (event: Object) => {
    const message = JSON.parse(event.nativeEvent.data);
    console.log(message);
  }

  render = () => {
    let source;
    if (__DEV__) {
      source = require('./www/index.html');
    } else {
      source = Platform.OS === 'ios' ? require('./www/index.html') : { uri: 'file:///android_asset/www/index.html' };
    }

    return (
      <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <WebView
          ref={(webview) => {
            this.webview = webview;
          }}
          startInLoadingState
          source={source}
          onMessage={this.handleMessage}
          automaticallyAdjustContentInsets={false}
          style={[styles.container, { height: Dimensions.get('window').height, width: webViewWidth }]}
        />
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor="#9b59b6" title="资料" onPress={() => Actions.moRegexInfoView()}>
            <Icon name="md-information" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

export default MoRegexView;
