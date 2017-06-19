import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modalbox';
import RNFetchBlob from 'react-native-fetch-blob';
import Toast from 'react-native-simple-toast';
import * as Progress from 'react-native-progress';


const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
  },
});


class FetchFileModal extends Component {
  static componentName = 'FetchFileModal';

  static propTypes = {
    url: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      url: this.props.url,
      fileName: this.props.fileName,
    };
  }

  componentDidMount() {
    this.fetchFile(this.props.url, this.props.fileName);
  }

  modal: null;

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
    })
    .catch((err) => {
      Toast.show(`下载失败 ${err}`);
    });
  }

  render() {
    return (
      <Modal
        style={[styles.modal]}
        position={'center'}
        ref={(modal) => { this.modal = modal; }}
      >
        <Progress.CircleSnail
          style={styles.progress}
          progress={this.state.progress}
          color={[
            '#F44336',
            '#2196F3',
            '#009688',
          ]}
        />
      </Modal>
    );
  }
}

export default FetchFileModal;
