import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

class Ul extends Component {
  static componentName = 'Ul';

  static propTypes = {
    margintop: PropTypes.number,
    component: PropTypes.node,
  };

  static defaultProps = {
    margintop: 15,
    component: null,
  };
  render() {
    return <View style={{ marginTop: this.props.margintop }}>{this.props.component}</View>;
  }
}
export default Ul;
