import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import AppStyle from '../../../../theme/styles';
import Line from '../../../../components/Line';

class SolutionContentItem extends Component {
  static componentName = 'SolutionContentItem';

  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(
      PropTypes.string,
    ).isRequired,
    click: PropTypes.func,
  };

  static defaultProps = {
    name: '',
    description: '',
    stack: [],
    click: () => {},
  };

  render() {
    const stack = this.props.stack
      .map((val, index) => (
        <Text key={val.concat(index)}>{val}</Text>));
    return (
      <TouchableHighlight
        style={AppStyle.solutionContentItemStyle}
        onPress={this.props.click}
        underlayColor="rgba(250, 250, 250, .9)"
      >
        <View>
          <View style={AppStyle.solutionContentItemTitleStyle}>
            <Text>{this.props.name}</Text>
          </View>
          <Text style={AppStyle.solutionContentItemDescriptionStyle}>{this.props.description}</Text>
          <Line />
          <View style={AppStyle.solutionContentItemStackStyle}>
            {stack}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
export default SolutionContentItem;
