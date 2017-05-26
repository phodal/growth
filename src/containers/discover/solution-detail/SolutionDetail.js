import React, { Component, PropTypes } from 'react';
import { ScrollView, Platform } from 'react-native';
import AppStyle from '../../../theme/styles';
import HtmlView from '../../../components/htmlview/HtmlView';

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
    if (basePath) {
      RNFS.readFile(basePath.concat(`/growth-content/solution/${this.props.slug}.html`), 'utf8')
        .then((result) => {
          this.setState({
            value: result,
          });
        });
    }
  }

  render() {
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        <HtmlView value={this.state.value} />
      </ScrollView>);
  }
}
export default SolutionDetail;
