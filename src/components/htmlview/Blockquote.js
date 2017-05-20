import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import AppStyle from '../../theme/styles';

class Blockquote extends Component {
  static componentName = 'Blockquote';

  static propTypes = {
    blockquoteStyle: View.propTypes.style,
    component: PropTypes.node,
  };

  static defaultProps = {
    blockquoteStyle: AppStyle.blockquote,
    component: null,
  };
  render() {
    return <View style={this.props.blockquoteStyle}>{this.props.component}</View>;
  }
}
export default Blockquote;
