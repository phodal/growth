/* eslint-disable global-require */
/* global __DEV__, require */
import React, { Component } from 'react';
import { WebView, StyleSheet, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

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

class SkillTree extends Component {
  static componentName = 'SkillTree';

  constructor() {
    super();
    this.webview = null;
  }

  handleMessage = (event: Object) => {
    const message = event.nativeEvent.data;
    const skillId = JSON.parse(message).id;
    Actions.skillDetail({ skillId: parseInt(skillId, 10) });
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
        injectedJavaScript=""
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }
}

export default SkillTree;
