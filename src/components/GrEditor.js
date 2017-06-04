/* eslint-disable global-require,no-unused-vars,class-methods-use-this */
import React, { Component } from 'react';
import { Keyboard, Dimensions, WebView, StyleSheet, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';
import Orientation from 'react-native-orientation';

import EditorWebViewServices from '../utils/EditorWebViewServices';

import AppSizes from '../theme/sizes';
import AppStyles from '../theme/styles';

const isObject = require('lodash.isobject');

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
    EditorWebViewServices.getWebView().postMessage(JSON.stringify({
      action: 'runCode',
      code: {},
    }));
  }

  constructor() {
    super();
    this.webview = null;
    this.state = {
      visibleHeight: Dimensions.get('window').height,
    };
  }

  componentWillMount() {
    Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this));
    Keyboard.addListener('keyboardWillHide', this.keyboardWillHide.bind(this));
    Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
    Orientation.addOrientationListener(this.orientationDidChange);
  }

  orientationDidChange = () => {
    EditorWebViewServices.getWebView().postMessage(JSON.stringify({
      action: 'resize',
    }));
  };

  handleMessage = (event: Object) => {
    const message = JSON.parse(event.nativeEvent.data);
    if (message.action === 'console') {
      if (isObject(message.data)) {
        Toast.show(JSON.stringify(message.data));
      } else {
        Toast.show(message.data.toString());
      }
    }
  };

  keyboardWillShow(event) {
    const newSize = Dimensions.get('window').height - event.endCoordinates.height;
    this.setState({ visibleHeight: newSize });
  }

  keyboardWillHide(event) {
    this.setState({ visibleHeight: Dimensions.get('window').height });
  }

  keyboardDidShow() {
    console.log('Keyboard Shown');
  }

  keyboardDidHide() {
    console.log('Keyboard Hidden');
  }


  render = () => {
    let source;
    if (__DEV__) {
      source = require('./GrEditor/index.html');
    } else {
      source = Platform.OS === 'ios' ? require('./GrEditor/index.html') : { uri: 'file:///android_asset/GrEditor/index.html' };
    }

    return (
      <WebView
        ref={(webview) => {
          this.webview = webview;
          EditorWebViewServices.setWebView(webview);
        }}
        startInLoadingState
        source={source}
        onMessage={this.handleMessage}
        automaticallyAdjustContentInsets={false}
        style={[AppStyles.container, styles.container, { height: this.state.visibleHeight }]}
      />
    );
  }
}

export default GrEditor;
