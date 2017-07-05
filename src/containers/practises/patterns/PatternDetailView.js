import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView, Dimensions } from 'react-native';
import HtmlHelper from '../../../utils/HtmlHelper';
import Helper from '../../../utils/helper';
import MarkdownHelper from '../../../utils/MarkdownHelper';

class PatternDetailView extends Component {
  static componentName = 'PatternDetailView';

  static propTypes = {
    item: React.PropTypes.shape({
      name: PropTypes.string,
      fileName: PropTypes.string,
      path: PropTypes.string,
      pattern: PropTypes.string,
    }).isRequired,
  };

  render() {
    const content = MarkdownHelper.convert(this.props.item.pattern);

    return (
      <WebView
        ref={(webview) => {
          this.webview = webview;
        }}
        scalesPageToFit
        startInLoadingState
        source={{ html: HtmlHelper.getHtml(content) }}
        style={{ height: Dimensions.get('window').height, backgroundColor: 'white' }}
        onNavigationStateChange={(event) => {
          if (event.url.startsWith('http')) {
            Helper.openLink(event.url);
            this.webview.stopLoading();
          }
        }}
        injectedJavaScript=""
      />
    );
  }
}

export default PatternDetailView;
