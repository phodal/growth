import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import Line from '../../../Line';

class TodoListItem extends Component {
  static componentName = 'TodoListItem';

  static propTypes = {
    checked: PropTypes.bool,
    title: PropTypes.string.isRequired,
    click: PropTypes.func,
  };

  static defaultProps = {
    checked: false,
    title: '',
    click: () => {},
  };

  render() {
    return (
      <TouchableHighlight
        onPress={this.props.click}
        underlayColor={'rgba(250, 250, 250, .9)'}
      >
        <View style={{ flexDirection: 'row', height: 40, paddingLeft: 10 }}>
          <Icon
            name={this.props.checked
              ? 'md-checkbox'
              : 'md-square-outline'}
            type={'ionicon'}
            color={this.props.checked ? '#03a9f4' : null}
          />
          <View style={{ flex: 1, justifyContent: 'center', marginLeft: 25 }}>
            <Text style={{ lineHeight: 39 }} numberOfLines={1}>{this.props.title}</Text>
            <Line />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
export default TodoListItem;
