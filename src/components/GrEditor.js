/* eslint-disable global-require */
import React, { Component } from 'react';
import { WebView, StyleSheet, Platform } from 'react-native';
import EditorWebViewServices from '../utils/EditorWebViewServices';

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

  static runCode() {
    EditorWebViewServices.getWebview().postMessage({
      action: 'runCode',
    });
  }

  constructor() {
    super();
    this.webview = null;
  }

  handleMessage = (event: Object) => {
    const message = event.nativeEvent.data;
    console.log(message);
  };

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
          EditorWebViewServices.setWebview(webview);
        }}
        startInLoadingState
        source={source}
        onMessage={this.handleMessage}
        automaticallyAdjustContentInsets={false}
        style={[AppStyles.container, styles.container]}
        injectedJavaScript=""
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }
}

export default GrEditor;
