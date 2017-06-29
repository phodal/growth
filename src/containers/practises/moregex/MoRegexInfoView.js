/* eslint-disable global-require */
import React, { Component } from 'react';
import { Platform } from 'react-native';
import HTMLView from 'react-native-htmlview';

class MoRegexInfoVie extends Component {
  static componentName = 'MoRegexInfoVie';

  render() {
    let source;
    if (__DEV__) {
      source = require('./explain.html');
    } else {
      source = Platform.OS === 'ios' ? require('./explain.html') : { uri: 'file:///android_asset/explain.html' };
    }

    return (
      <HTMLView
        value={source}
        addLineBreaks={false}
        style={{ padding: 10, borderBottomWidth: 1, backgroundColor: '#fff', borderBottomColor: '#ddd' }}
      />
    );
  }
}

export default MoRegexInfoVie;
