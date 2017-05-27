import React, { Component, PropTypes } from 'react';
import { WebView, Dimensions } from 'react-native';
import HtmlHelper from '../utils/HtmlHelper';

class CustomWebView extends Component {
  static componentName = 'CustomWebView';

  static propTypes = {
    html: PropTypes.string,
  };

  static defaultProps = {
    html: '',
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.webview = null;
  }

  render() {
    return (
      <WebView
        ref={(webview) => {
          this.webview = webview;
        }}
        scalesPageToFit
        startInLoadingState
        source={{ html: HtmlHelper.getHtml(this.props.html) }}
        style={{ height: Dimensions.get('window').height, backgroundColor: 'white' }}
        onNavigationStateChange={this.onNavigationStateChange}
        injectedJavaScript=""
      />);
  }
}
export default CustomWebView;
