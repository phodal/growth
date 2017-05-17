/**
 * Web View
 *
 * <WebView url={"http://google.com"} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import React, { Component, PropTypes } from 'react';
import {
  WebView,
  Text,
  InteractionManager,
} from 'react-native';

class AppWebView extends Component {
  static componentName = 'AppWebView';

  static propTypes = {
    url: PropTypes.string.isRequired,
    onNavigationStateChange: PropTypes.func,
  };

  static defaultProps = {
    onNavigationStateChange: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      webViewURL: props.url || null,
    };
  }

  componentDidMount = () => {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ loading: false });
    });
  };

  onNavigationStateChange = (navState) => {
    this.state.webViewURL = navState.url;
    if (this.props.onNavigationStateChange) this.props.onNavigationStateChange(navState.url);
  };

  render = () => {
    const { webViewURL, loading } = this.state;

    if (loading) return <Text>Loading...</Text>;
    if (!webViewURL) return <Error type={'URL not defined.'} />;

    return (
      <WebView
        scalesPageToFit
        startInLoadingState
        source={{ uri: webViewURL }}
        automaticallyAdjustContentInsets={false}
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }
}

export default AppWebView;
