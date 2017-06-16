import RNFetchBlob from 'react-native-fetch-blob';
import Toast from 'react-native-simple-toast';
import { unzip } from 'react-native-zip-archive';

class FileHelper {
  static fetchFile(url, fileName) {
    const DIR = RNFetchBlob.fs.dirs;

    RNFetchBlob
    .config({
      path: `${DIR.DocumentDir}/${fileName}.zip`,
    })
    .fetch('GET', url, {
      // some headers ..
    })
    .progress((received, total) => {
      console.log('progress', received / total);
    })
    .then((res) => {
      unzip(res.path(), `${DIR.DocumentDir}/${fileName}`)
      .then((path) => {
        console.log(`unzip completed at ${path}`);
      })
      .catch((err) => {
        Toast.show(`解压失败 ${err}`);
      });
    })
    .catch((err) => {
      Toast.show(`下载失败 ${err}`);
    });
  }
}

export default FileHelper;
