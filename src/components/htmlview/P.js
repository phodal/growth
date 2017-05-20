import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';

class P extends Component {
  static componentName = 'P';

  static propTypes = {
    margintop: PropTypes.number.isRequired,
    component: PropTypes.node,
  };

  static defaultProps = {
    margintop: 0,
    component: null,
  };
  render() {
    return <Text style={{ marginTop: this.props.margintop }}>{this.props.component}</Text>;
  }
}
export default P;
