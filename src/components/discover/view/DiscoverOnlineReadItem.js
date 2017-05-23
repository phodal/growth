import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import AppStyle from '../../../theme/styles';

class OnLineReadItem extends Component {
  static propTypes = {
    imageParentStyle: View.propTypes.style,
    image: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string,
      }),
      // Opaque type returned by require('./image.jpg')
      PropTypes.number,
      // Multiple sources
      PropTypes.arrayOf(
        PropTypes.shape({
          uri: PropTypes.string,
          width: PropTypes.number,
          height: PropTypes.number,
        }))]),
    imageStyle: Image.propTypes.style,
    title: PropTypes.string.isRequired,
    titleStyle: Text.propTypes.style,
    onclick: PropTypes.func,
    top: PropTypes.number,
  };

  static defaultProps = {
    imageParentStyle: AppStyle.discoverOnlineItem,
    image: '',
    imageStyle: AppStyle.discoverOnlineItemImage,
    title: '',
    titleStyle: AppStyle.discoverOnlineItemTitle,
    onclick: () => {},
    top: 0,
  };

  render = () => (
    <TouchableHighlight
      onPress={this.props.onclick}
      style={{ flex: 1, marginTop: this.props.top }}
    >
      <View style={this.props.imageParentStyle}>
        <Image source={this.props.image} style={this.props.imageStyle} />
        <View style={this.props.titleStyle}>
          <Text>{this.props.title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
export default OnLineReadItem;
