import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import AppStyle from '../../theme/styles';
import hlper from '../../utils/helper';

class A extends Component {
  static componentName = 'A';

  static propTypes = {
    link: PropTypes.string,
    component: PropTypes.node,
  };

  static defaultProps = {
    link: null,
    component: null,
  };
  render() {
    return (<Text
      onPress={() => hlper.openLink(this.props.link)}
      style={AppStyle.a}
    >{this.props.component}</Text>);
  }
}
export default A;
