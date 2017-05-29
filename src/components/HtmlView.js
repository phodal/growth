import React, { Component, PropTypes } from 'react';
import { View, Platform } from 'react-native';
import RNFS from 'react-native-fs';
import Api from '../utils/api';
import AppStyle from '../theme/styles';
import Dialog from './dialog';
import CustomWebView from './CustomWebView';

export const NATIVE = 'native';
export const NET = 'net';

const marked = require('marked');

class HtmlView extends Component {
  static componentName = 'HtmlView';

  static propTypes = {
    type: PropTypes.string,
    url: PropTypes.string,
    domain: PropTypes.string,
    slug: PropTypes.string,
    dialogContent: PropTypes.string,
  };

  static defaultProps = {
    type: NATIVE,
    url: '',
    domain: '',
    slug: '',
    dialogContent: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      html: '',
    };
  }

  componentDidMount() {
    if (this.props.type === NET) {
      Api.get(this.props.url)
        .then(response => this.setState({
          visible: false,
          html: marked(response.data) }))
        .catch(err => this.setState({
          visible: false,
          html: err.message,
        }));
    } else {
      const basePath = Platform.OS === 'ios'
        ? RNFS.MainBundlePath
        : RNFS.ExternalDirectoryPath;
      if (basePath) {
        RNFS.readFile(basePath.concat(`/growth-content/${this.props.domain}/${this.props.slug}.html`), 'utf8')
          .then((result) => {
            this.setState({
              html: result,
              visible: false,
            });
          });
      }
    }
  }

  render() {
    return (
      <View style={[AppStyle.detailBasisStyle, { flex: 1 }]} >
        {
          this.props.type === NATIVE
            ? null
            : <Dialog show={this.state.visible} content={this.props.dialogContent} />
        }
        <CustomWebView html={this.state.html} />
      </View>);
  }
}
export default HtmlView;
