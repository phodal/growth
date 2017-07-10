/* eslint-disable global-require,no-unused-vars,class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, WebView, StyleSheet, Platform } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import AppSizes from '../../../theme/sizes';


const styles = StyleSheet.create({
  container: {

  },
  background: {
    backgroundColor: 'transparent',
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.85,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
});

const webViewWidth = Dimensions.get('window').width;

class MoRegexView extends Component {
  static componentName = 'MoRegexView';

  static propTypes = {
    regex: React.PropTypes.shape({
      name: PropTypes.string,
      regex: PropTypes.instanceOf(RegExp),
      description: PropTypes.string,
      tags: PropTypes.string,
    }),
  };

  static defaultProps = {
    regex: {
      name: '',
      regex: /1-9a-Z/,
      descriptions: '',
      tag: '',
    },
  };

  constructor() {
    super();
    this.webview = null;
  }

  componentWillReceiveProps() {
    if (this.webview) {
      this.webview.postMessage(JSON.stringify({ action: 'trigger' }));
    }
  }

  handleMessage = (event: Object) => {
    const message = JSON.parse(event.nativeEvent.data);
    const regex = this.props.regex;
    if (regex.name !== '' && message.status && message.status === 'ready') {
      regex.regex = this.props.regex.regex.toString();
      this.webview.postMessage(JSON.stringify(regex));
    }
  };

  render = () => {
    let source;
    if (__DEV__) {
      source = require('./www/index.html');
    } else {
      source = Platform.OS === 'ios' ? require('./www/index.html') : { uri: 'file:///android_asset/moregex/index.html' };
    }

    return (
      <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <WebView
          ref={(webview) => {
            this.webview = webview;
          }}
          startInLoadingState
          source={source}
          onMessage={this.handleMessage}
          automaticallyAdjustContentInsets={false}
          style={[styles.container, { height: Dimensions.get('window').height, width: webViewWidth }]}
        />
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor="#9b59b6" title="资料" onPress={() => Actions.moRegexInfoView()}>
            <Icon name="md-information" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  regex: state.regex.regex,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MoRegexView);
