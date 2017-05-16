import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import AppStyle from '../../theme/styles';

class SimpleListItem extends Component {
  static componentName = 'SimpleListItem';

  static propTypes = {
    click: PropTypes.func,
    underlayColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    click: () => {},
    underlayColor: 'rgba(250, 250, 250, .9)',
    backgroundColor: 'white',
    text: '',
  };

  render() {
    return (
      <TouchableHighlight
        onPress={this.props.click}
        underlayColor={this.props.underlayColor}
        style={{ backgroundColor: this.props.backgroundColor }}
        key={this.props.text}
      >
        <View>
          <View style={AppStyle.simpleListItemStyle}>
            <Text>{this.props.text}</Text>
          </View>
          <Text style={AppStyle.line} />
        </View>
      </TouchableHighlight>
    );
  }
}
export default SimpleListItem;
