import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

class Ol extends Component {
  static componentName = 'Ol';

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
export default Ol;
