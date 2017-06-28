/* eslint-disable global-require,no-unused-vars,class-methods-use-this */
import React, { Component } from 'react';
import { Dimensions, WebView, StyleSheet, Platform } from 'react-native';

import AppSizes from '../../../theme/sizes';
import AppStyles from '../../../theme/styles';


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
      source = require('./build/index.html');
    } else {
      source = Platform.OS === 'ios' ? require('./build/index.html') : { uri: 'file:///android_asset/moregex/index.html' };
    }

    return (
      <WebView
        ref={(webview) => {
          this.webview = webview;
        }}
        startInLoadingState
        source={source}
        onMessage={this.handleMessage}
        automaticallyAdjustContentInsets={false}
        style={[AppStyles.container, styles.container, { width: webViewWidth }]}
      />
    );
  }
}

export default MoRegexView;
