import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from '../../../icon/GrowthFont';
import AppStyle from '../../../theme/styles';

const iconsSize = 30;
const clickItemUnderlayColor = 'rgba(250,250,250, .9)';
const LEFT = 'left';
const RIGHT = 'right';

class GridItem extends Component {
  static componentName = 'GridItem';

  static propTypes = {
    gridItemStyle: View.propTypes.style,
    iconStyle: Text.propTypes.style,
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.number.isRequired,
    titleStyle: Text.propTypes.style,
    title: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    itemUnderlayColor: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  };

  static defaultProps = {
    gridItemStyle: AppStyle.discoverGridItem,
    iconStyle: AppStyle.discoverTextColor,
    iconName: '',
    iconSize: iconsSize,
    titleStyle: AppStyle.discoverGridTextItem,
    title: '',
    onclick: () => {},
    itemUnderlayColor: clickItemUnderlayColor,
    position: LEFT,

  };

  render = () => (
    <TouchableHighlight
      onPress={this.props.onclick}
      style={this.props.position === RIGHT
        ? AppStyle.discoverGridPositionRight
        : AppStyle.discoverGridPositionLeft}
      underlayColor={this.props.itemUnderlayColor}
    >
      <View style={this.props.gridItemStyle} >
        <Icon name={this.props.iconName} size={this.props.iconSize} style={this.props.iconStyle} />
        <Text style={this.props.titleStyle}>{this.props.title}</Text>
      </View>
    </TouchableHighlight>
  );
}
export default GridItem;
