import React, { Component, PropTypes } from 'react';
import { View, Platform } from 'react-native';
import AppStyle from '../../../theme/styles';
import CustomWebView from '../../../components/CustomWebView';

const RNFS = require('react-native-fs');

class SolutionDetail extends Component {
  static componentName = 'SolutionDetailView';

  static propTypes = {
    slug: PropTypes.string.isRequired,
  };

  static defaultProps = {
    slug: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    const basePath = Platform.OS === 'ios'
      ? RNFS.MainBundlePath
      : RNFS.ExternalDirectoryPath;

    RNFS.readFile(basePath.concat(`/growth-content/solution/${this.props.slug}.html`), 'utf8')
      .then((result) => {
        this.setState({
          value: result,
        });
      });
  }

  render() {
    return (
      <View style={[AppStyle.detailBasisStyle, { flex: 1 }]} >
        <CustomWebView html={this.state.value} />
      </View>);
  }
}
export default SolutionDetail;
