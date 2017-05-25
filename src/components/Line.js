import React, { Component } from 'react';
import { View } from 'react-native';
import AppStyle from '../theme/styles';

class Line extends Component {
  static componentName = 'Line';

  render() {
    return (<View style={AppStyle.line} />);
  }
}
export default Line;
