import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';

class Span extends Component {
  static componentName = 'Span';

  static propTypes = {
    component: PropTypes.node,
  };

  static defaultProps = {
    component: null,
  };
  render() {
    return (<Text>{this.props.component}</Text>);
  }
}
export default Span;
