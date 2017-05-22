import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';

class P extends Component {
  static componentName = 'P';

  static propTypes = {
    margintop: PropTypes.number.isRequired,
    component: PropTypes.node,
    childrenName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    margintop: 0,
    component: null,
    childrenName: '',
  };

  render() {
    if (this.props.childrenName === 'img') {
      return <View style={{ marginTop: this.props.margintop }}>{this.props.component}</View>;
    }
    return <Text style={{ marginTop: this.props.margintop }}>{this.props.component}</Text>;
  }
}
export default P;
