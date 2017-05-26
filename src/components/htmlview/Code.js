import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';

class Code extends Component {
  static componentName = 'Code';

  static propTypes = {
    margintop: PropTypes.number,
    component: PropTypes.node,
  };

  static defaultProps = {
    margintop: 15,
    component: null,
  };
  render() {
    return <Text style={{ marginTop: this.props.margintop, backgroundColor: '#f9f9f7' }}>{this.props.component}</Text>;
  }
}
export default Code;
