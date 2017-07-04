/* eslint-disable global-require,no-unused-vars,class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, WebView, StyleSheet, Platform, Text, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Interactable from 'react-native-interactable';
import { Button } from 'react-native-elements';

import AppSizes from '../../../theme/sizes';


const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 40,
};

const styles = StyleSheet.create({
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: Screen.height + 300,
    padding: 20,
    backgroundColor: '#f7f5eee8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 20,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  background: {
    backgroundColor: 'transparent',
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
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
    this.deltaY = new Animated.Value(Screen.height - 100);
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
      source = Platform.OS === 'ios' ? require('./www/index.html') : { uri: 'file:///android_asset/www/index.html' };
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
        <View style={styles.panelContainer}>
          <Animated.View
            style={[styles.panelContainer, {
              backgroundColor: 'black',
              opacity: this.deltaY.interpolate({
                inputRange: [0, Screen.height - 100],
                outputRange: [0.5, 0],
                extrapolateRight: 'clamp',
              }),
            }]}
          />
          <Interactable.View
            verticalOnly
            snapPoints={[{ y: 40 }, { y: Screen.height - 200 }, { y: Screen.height - 100 }]}
            boundaries={{ top: -200 }}
            initialPosition={{ y: Screen.height - 100 }}
            animatedValueY={this.deltaY}
          >
            <View style={styles.panel}>
              <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
              </View>
              <Text style={styles.panelTitle}>相关资料</Text>
              <Text style={styles.panelSubtitle}>精选正则表达式资源</Text>
              <Button
                title={'MDN 正则表达式表'}
                borderRadius={6}
                backgroundColor={'#03a9f4'}
                onPress={() => Actions.moRegexInfoView()}
              />
            </View>
          </Interactable.View>
        </View>
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
