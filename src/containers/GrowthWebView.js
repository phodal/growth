import React, { Component, PropTypes } from 'react';
import { WebView } from 'react-native';

class GrowthWebView extends Component {
  static componentName = 'GrowthWebView';

  static propTypes = {
    link: PropTypes.string.isRequired,
  };

  static defaultProps = {
    link: 'https://github.com/phodal/growth-ng/issues',
  };
  render() {
    return (
      <WebView
        source={{ uri: this.props.link }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
export default GrowthWebView;
