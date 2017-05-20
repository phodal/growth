import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

const listStyle = '\u2022'.concat('\u0020'); // li

class Li extends Component {
  static componentName = 'Li';

  static propTypes = {
    color: PropTypes.string,
    component: PropTypes.node,
  };

  static defaultProps = {
    color: '#000',
    component: null,
  };
  render() {
    return (
      <View>
        <Text style={{ color: this.props.color }}>
          {listStyle}
          {this.props.component}
        </Text>
      </View>);
  }
}
export default Li;
