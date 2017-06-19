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
import { unzip } from 'react-native-zip-archive';
import RNFS from 'react-native-fs';

import AsyncStorageHelper from '../../../utils/AsyncStorageHelper';

const randomColor = require('randomcolor'); // import the script

const DIR = RNFetchBlob.fs.dirs;
const LEETCODE_PATH = '/growth-leetcode-api-master';
const LeetCodeUrl = 'https://github.com/phodal/growth-leetcode-api/archive/master.zip';
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
  static modal = null;

  constructor(props) {
    super(props);

    this.state = {
      progress: 0.001,
      questions: null,
      size: { width, height },
      hasDownloaded: false,
    };
  }

  componentWillMount() {
    AsyncStorageHelper.get('leetcode.index', (err, result) => {
      let index = 0;
      if (result !== null) {
        index = parseInt(result, 10);
      }

      this.setState({
        index,
      });
    });

    AsyncStorageHelper.get('leetcode.downloaded', (err, result) => {
      if (result === 'true') {
        this.setState({
          hasDownloaded: true,
        });
      }
    });
  }

  componentDidMount() {
    const that = this;
    AsyncStorageHelper.get('leetcode.downloaded', (err, result) => {
      if (result !== 'true') {
        this.modal.open();
        this.fetchFile(LeetCodeUrl, 'leetcode');
      } else {
        AsyncStorageHelper.get('leetcode.questions', (error, questions) => {
          if (questions) {
            that.setState({
              questions: JSON.parse(questions),
            });
          } else {
            that.loadQuestionsToDB();
          }
        });
      }
    });
  }

  onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  loadQuestionsToDB() {
    const leetCodeDir = DIR.DocumentDir.concat(`${LEETCODE_PATH}/api.json`);
    console.log(leetCodeDir);

    RNFS.readFile(leetCodeDir, 'utf8')
    .then((json) => {
      this.setState({
        questions: JSON.parse(json),
      });

      AsyncStorageHelper.set('leetcode.questions', json);
    }).catch((error) => {
      Toast.show(error);
      AsyncStorageHelper.set('leetcode.downloaded', 'false');
    });
  }

  fetchFile(url, fileName) {
    RNFetchBlob
    .config({
      path: `${DIR.DocumentDir}/${fileName}.zip`,
    })
    .fetch('GET', url, {})
    .progress((received, total) => {
      const progressWithoutRound = received / total;

      let progress = Math.round(progressWithoutRound * 1e2) / 1e2;
      if (progress > 1) {
        progress = 1;
      }
      this.setState({ progress });
    })
    .then((res) => {
      const now = new Date();
      console.log(`${now} 下载成功`);
      console.log(res.path());

      this.unzipFiles(res);

      AsyncStorageHelper.set('leetcode.downloaded', 'true');
      this.setState({ hasDownloaded: true });
    })
    .catch((err) => {
      Toast.show(`下载失败 ${err}`);
    });
  }

  unzipFiles(res) {
    unzip(res.path(), `${DIR.DocumentDir}`).then(() => {
      this.loadQuestionsToDB();
      AsyncStorageHelper.set('leetcode.unzip', 'true');
    }).catch((err) => {
      console.log(`解压失败 ${err}`);
      Toast.show(`解压失败 ${err}`);
    });
  }

  render() {
    const hasDownloaded = this.state.hasDownloaded;
    const questions = this.state.questions;

    if (!hasDownloaded || !questions) {
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
          pageInfo={false}
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
