/* eslint-disable global-require */
import React, { Component } from 'react';
import { WebView, StyleSheet, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

import AppSizes from '../theme/sizes';
import AppStyles from '../theme/styles';

const styles = StyleSheet.create({
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

class GrEditor extends Component {
  static componentName = 'GrEditor';

  constructor() {
    super();
    this.webview = null;
  }

  render = () => {
    let source;
    if (__DEV__) {
      source = require('./GrEditor/index.html');
    } else {
      source = Platform.OS === 'ios' ? require('./GrEditor/index.html') : { uri: 'file:///android_asset/GrEdtiror/index.html' };
    }

    return (
      <WebView
        ref={(webview) => {
          this.webview = webview;
        }}
        startInLoadingState
        source={source}
        automaticallyAdjustContentInsets={false}
        style={[AppStyles.container, styles.container]}
        injectedJavaScript=""
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }
}

export default GrEditor;
