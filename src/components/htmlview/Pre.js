import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import AppStyle from '../../theme/styles';

class Pre extends Component {
  static componentName = 'Pre';

  static propTypes = {
    component: PropTypes.node,
  };

  static defaultProps = {
    component: null,
  };
  render() {
    return <View style={AppStyle.pre}>{this.props.component}</View>;
  }
}
export default Pre;
