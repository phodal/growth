import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import AppStyle from '../../theme/styles';

class H extends Component {
  static componentName = 'H';

  static propTypes = {
    fontSize: PropTypes.number.isRequired,
    component: PropTypes.node,
  };

  static defaultProps = {
    fontSize: 18,
    component: null,
  };
  render() {
    return (<Text
      style={[AppStyle.h, { fontSize: this.props.fontSize }]}
    >
      {this.props.component}
    </Text>);
  }
}
export default H;
