import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import Modal from 'react-native-modalbox';
import RNFetchBlob from 'react-native-fetch-blob';
import Toast from 'react-native-simple-toast';
import * as Progress from 'react-native-progress';

import AsyncStorageHelper from '../../../utils/AsyncStorageHelper';

const randomColor = require('randomcolor'); // import the script

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    flex: 1,
  },
  text: {
    paddingBottom: 50,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
  },
});

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
      progress: 0,
      size: { width, height },
      hasDownloaded: false,
    };
  }

  componentDidMount() {
    const self = this;
    AsyncStorageHelper.get('leetcode.downloaded', (err, result) => {
      if (result === 'true') {
        self.setState({
          hasDownloaded: true,
        });
      } else {
        self.modal.open();
        self.fetchFile('https://github.com/phodal/growth-leetcode-api/archive/master.zip', 'leetcode');
      }
    });
  }

  onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  fetchFile(url, fileName) {
    const DIR = RNFetchBlob.fs.dirs;

    RNFetchBlob
    .config({
      path: `${DIR.DocumentDir}/${fileName}.zip`,
    })
    .fetch('GET', url, {
      // some headers ..
    })
    .progress((received, total) => {
      let progress = received / total;
      if (progress > 1) {
        progress = 1;
      }
      this.setState({ progress });
    })
    .then((res) => {
      const now = new Date();
      console.log(`${now} 下载成功`);
      console.log(res.path());
      AsyncStorageHelper.set('leetcode.downloaded', 'true');
      this.setState({ hasDownloaded: true });
    })
    .catch((err) => {
      Toast.show(`下载失败 ${err}`);
    });
  }

  render() {
    const hasDownloaded = this.state.hasDownloaded;
    if (!hasDownloaded) {
      return (
        <Modal
          style={[styles.modal]}
          position={'center'}
          ref={(modal) => { this.modal = modal; }}
        >
          <Text style={styles.text}>正在为您下载</Text>
          <Progress.Circle
            style={styles.progress}
            progress={this.state.progress}
            indeterminate
            size={80}
          />
        </Modal>
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
