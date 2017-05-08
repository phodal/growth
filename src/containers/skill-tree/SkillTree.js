/* eslint-disable global-require */
/* global __DEV__, require */
import React from 'react';
import { WebView, StyleSheet, Platform } from 'react-native';
import AppSizes from '../../theme/sizes';
import AppStyles from '../../theme/styles';

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

class SkillTree extends React.PureComponent {
  static componentName = 'SkillTree';

  constructor() {
    super();
    this.webview = null;
  }

  handleMessage = (evt: any) => {
    const message = evt.nativeEvent.data;
    // this.webview.postMessage(message);
    this.message = message;
  };

  render = () => {
    let source;
    if (__DEV__) {
      source = require('./www/index.html');
    } else {
      source = Platform.OS === 'ios' ? require('./www/index.html') : { uri: 'file:///android_asset/www/index.html' };
    }

    return (
      <WebView
        ref={(webview) => {
          this.webview = webview;
        }}
        scalesPageToFit
        startInLoadingState
        onMessage={this.handleMessage}
        source={source}
        automaticallyAdjustContentInsets={false}
        style={[AppStyles.container, styles.container]}
        injectedJavaScript="document.body.style.background = 'red';window.cordova = {getAppVersion: {getVersionNumber: function(){var message = {action: 'getVersionNumber'}window.postMessage(JSON.stringify(message))}}}"
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }
}

export default SkillTree;
