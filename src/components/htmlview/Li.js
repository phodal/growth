import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

class Li extends Component {
  static componentName = 'Li';

  static propTypes = {
    color: PropTypes.string,
    component: PropTypes.node,
    parentName: PropTypes.string,
    index: PropTypes.number,
  };

  static defaultProps = {
    color: '#000',
    component: null,
    parentName: 'ol',
    index: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      listStyle: (this.props.parentName === 'ul' ? '\u2022' : ''.concat(this.props.index + 1).concat('.')).concat('\u0020'),
    };
  }

  render() {
    return (
      <View>
        <Text style={{ color: this.props.color }}>
          {this.state.listStyle}
          {this.props.component}
        </Text>
      </View>);
  }
}
export default Li;
