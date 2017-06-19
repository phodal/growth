import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import AsyncStorageHelper from '../../../utils/AsyncStorageHelper';
import FetchFileModal from '../../../components/helper/FetchFileModal';

const randomColor = require('randomcolor'); // import the script

const { width, height } = Dimensions.get('window');

function getRandomColor() {
  return randomColor({
    luminosity: 'light',
    hue: 'random',
  });
}

export default class LeetCodeView extends Component {
  static componentName = 'LeetCodeView';

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
      hasDownloaded: false,
    };
  }

  componentWillMount() {
    AsyncStorageHelper.get('leetcode.downloaded', (err, result) => {
      if (result === 'true') {
        this.setState({
          hasDownloaded: true,
        });
      }
    });
  }

  onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    const hasDownloaded = this.state.hasDownloaded;
    if (!hasDownloaded) {
      return (
        <FetchFileModal
          url={'https://github.com/phodal/growth-leetcode-api/archive/master.zip'}
          fileName={'leetcode'}
        />
      );
    }

    return (
      <View style={{ flex: 1 }} onLayout={this.onLayoutDidChange}>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay={false}
          pageInfo
          onAnimateNextPage={p => console.log(p)}
        >
          <View style={[{ backgroundColor: getRandomColor() }, this.state.size]}>
            <Text>1</Text>
          </View>
          <View style={[{ backgroundColor: getRandomColor() }, this.state.size]}>
            <Text>2</Text>
          </View>
          <View style={[{ backgroundColor: getRandomColor() }, this.state.size]}>
            <Text>3</Text>
          </View>
        </Carousel>
      </View>
    );
  }
}
