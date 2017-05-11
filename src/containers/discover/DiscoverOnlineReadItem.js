import React, { Component, PropTypes } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';


class OnLineReadItem extends Component {
  static propTypes = {
    flex: PropTypes.number,
    marginTop: PropTypes.number,
    imageFlex: PropTypes.number,
    titleFlex: PropTypes.number,
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
    imageWidth: PropTypes.number,
    title: PropTypes.string,
    titleBackgroundColor: PropTypes.string,
    titleJustifyContent: PropTypes.string,
    titleAlignItems: PropTypes.string,
    imageResizeMode: PropTypes.string,
  };
  static defaultProps = {
    flex: 1,
    marginTop: 0,
    imageFlex: 1,
    titleFlex: 1,
    image: '',
    imageWidth: Dimensions.get('window').width - 30,
    imageResizeMode: 'stretch',
    title: '',
    titleBackgroundColor: 'white',
    titleJustifyContent: 'center',
    titleAlignItems: 'center',
  };
  render = () => (
    <View style={{ flex: this.props.flex, marginTop: this.props.marginTop }}>
      <Image
        source={this.props.image}
        style={{
          flex: this.props.imageFlex,
          width: this.props.imageWidth,
          resizeMode: this.props.imageResizeMode }}
      />
      <View
        style={{
          flex: this.props.titleFlex,
          width: this.props.imageWidth,
          backgroundColor: this.props.titleBackgroundColor,
          justifyContent: this.props.titleJustifyContent,
          alignItems: this.props.titleAlignItems }}
      >
        <Text>{this.props.title}</Text>
      </View>
    </View>
  );
}
export default OnLineReadItem;
