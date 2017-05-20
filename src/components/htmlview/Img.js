import React, { Component, PropTypes } from 'react';
import { Image } from 'react-native';
import AppStyle from '../../theme/styles';

class Img extends Component {
  static componentName = 'Img';

  static propTypes = {
    uri: PropTypes.string.isRequired,
    component: PropTypes.node,
  };

  static defaultProps = {
    uri: '',
    component: null,
  };
  render() {
    return (<Image
      source={{ uri: this.props.uri }}
      style={AppStyle.img}
    >{this.props.component}</Image>);
  }
}
export default Img;
