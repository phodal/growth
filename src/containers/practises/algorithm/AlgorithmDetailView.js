/* eslint-disable import/no-dynamic-require,global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, ScrollView, TouchableOpacity, Dimensions, WebView, Platform,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Icon, Text } from 'react-native-elements';
import * as shortid from 'shortid';
import ActionButton from 'react-native-action-button';

import ALGORITHMS from './ALGORITHMS';
import AppSizes from '../../../theme/sizes';
import MarkdownHelper from '../../../utils/MarkdownHelper';
import HtmlHelper from '../../../utils/HtmlHelper';
import MoregexWebViewServices from '../../../utils/MoregexWebViewServices';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: AppSizes.navbarHeight,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  heading: {
    padding: 10,
    fontSize: 15,
  },
  childBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewHeight: {
    height: (height - AppSizes.tabbarHeight - AppSizes.navbarHeight) / 2,
  },
  trace: {
    backgroundColor: '#50616D',
  },
  traceText: {
    color: '#30ea30',
  },
});

class AlgorithmDetailView extends Component {
  static componentName = 'AlgorithmDetailView';

  static propTypes = {
    category: PropTypes.string.isRequired,
    item: React.PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.swiper = null;
    this.webview = null;
    this.state = {
      canPause: false,
      algorithmInfo: null,
      selectedTab: 'detail',
      swiperIndex: 0,
      trace: [],
      code: '',
    };
  }

  componentWillMount() {
    const algorithmInfo = ALGORITHMS[this.props.category][this.props.item.key];
    const code = MarkdownHelper.convert(`\`\`\`js \n ${algorithmInfo.code}`);
    this.setState({
      algorithmInfo,
      code,
    });

    if (!this.webview) {
      MoregexWebViewServices.getWebView();
    }
  }

  componentDidMount() {
    MoregexWebViewServices.setWebView(this.webview);
  }

  onNavigationStateChange() {
    if (this.webview) {
      this.webview.postMessage(JSON.stringify({
        action: 'run',
      }));
    }
  }

  handleMessage = (event: Object) => {
    const message = JSON.parse(event.nativeEvent.data);
    if (message.status && message.status === 'ready') {
      const algorithmInfo = this.state.algorithmInfo;
      const file = Object.keys(algorithmInfo.files)[0];
      this.webview.postMessage(JSON.stringify({
        action: 'algorithm',
        algorithm: {
          category: algorithmInfo.category,
          algorithm: algorithmInfo.key,
          file,
        },
      }));
    } else if (message.action && message.action === 'trace') {
      const trace = this.state.trace;
      trace.push(message.message);
      this.setState({
        trace,
      });
    }
  };

  runCode() {
    this.setState({
      canPause: true,
    });
    this.webview.postMessage(JSON.stringify({
      action: 'run',
    }));
  }

  pauseRun() {
    this.setState({
      canPause: false,
    });
    this.webview.postMessage(JSON.stringify({
      action: 'pause',
    }));
  }

  keyExtractor = (item, index) => `key${index}`;

  updateSwiper(index) {
    const currentIndex = this.state.swiperIndex;
    this.swiper.scrollBy(index - currentIndex);

    this.setState({
      swiperIndex: index,
    });
  }

  render() {
    const { algorithmInfo, code, trace } = this.state;
    let source;
    if (__DEV__) {
      source = require('./algorithm-webview/index.html');
    } else {
      source = Platform.OS === 'ios' ? require('./algorithm-webview/index.html') : { uri: 'file:///android_asset/algorithm-webview/index.html' };
    }

    let timeComplexity = null;
// eslint-disable-next-line no-prototype-builtins
    if (algorithmInfo.complexity && algorithmInfo.complexity.hasOwnProperty('time')) {
      timeComplexity = <Text style={styles.text}>时间：{algorithmInfo.complexity.time}</Text>;
    }

    let spaceComplexity = null;
// eslint-disable-next-line no-prototype-builtins
    if (algorithmInfo.complexity && algorithmInfo.complexity.hasOwnProperty('space')) {
      spaceComplexity = <Text style={styles.text}>空间：{algorithmInfo.complexity.space}</Text>;
    }

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={styles.viewHeight}>
          <WebView
            ref={(webview) => {
              this.webview = webview;
            }}
            scalesPageToFit
            startInLoadingState
            source={source}
            onMessage={this.handleMessage}
            style={[styles.viewHeight, { backgroundColor: '#ddd' }]}
            injectedJavaScript=""
            onNavigationStateChange={this.onNavigationStateChange}
          />
          {
            this.state.canPause ?
              <ActionButton
                buttonColor="#ee1111"
                icon={<Icon name={'pause'} color={'#fff'} size={28} />}
                onPress={() => this.pauseRun()}
              /> :
              <ActionButton
                buttonColor="#00a300"
                icon={<Icon name={'play-arrow'} color={'#fff'} size={28} />}
                onPress={() => this.runCode()}
              />
          }
        </View>

        <View style={styles.viewHeight}>
          <Swiper
            loop={false}
            style={styles.wrapper}
            dot={(<View />)}
            activeDot={(<View />)}
            height={(height - AppSizes.tabbarHeight - AppSizes.navbarHeight) / 2}
            ref={(swiper) => { this.swiper = swiper; }}
          >
            <ScrollView contentContainerStyle={[styles.slide]}>
              <Text style={styles.heading}>{algorithmInfo.name}</Text>
              <Text style={styles.text}>{algorithmInfo.description}</Text>
              <Text style={styles.heading}>复杂度</Text>
              {timeComplexity}
              {spaceComplexity}
              <Text style={styles.heading}>参考资料</Text>
              <Text style={styles.text}>{algorithmInfo.references[0]}</Text>
            </ScrollView>
            <ScrollView contentContainerStyle={[styles.viewHeight, styles.slide, styles.trace]}>
              {
                trace ? trace.map(message =>
                (<View key={shortid.generate()}>
                  <Text style={styles.traceText}>
                    {message}
                  </Text>
                </View>)) : null
              }
            </ScrollView>
            <ScrollView contentContainerStyle={styles.viewHeight}>
              <WebView
                scalesPageToFit
                startInLoadingState
                source={{ html: HtmlHelper.getHtml(code) }}
                style={[styles.viewHeight, { backgroundColor: 'white' }]}
                injectedJavaScript=""
              />
            </ScrollView>
          </Swiper>
        </View>

        <View style={styles.tabbar}>
          <TouchableOpacity
            style={styles.childBar}
            onPress={() => { this.updateSwiper(0); }}
          >
            <View>
              <Icon name={'device-hub'} color={'#666'} size={28} />
              <Text style={{ paddingTop: 6 }}>介绍</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.childBar}
            onPress={() => { this.updateSwiper(1); }}
          >
            <View>
              <Icon name={'assessment'} color={'#666'} size={28} />
              <Text style={{ paddingTop: 6 }}>执行</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.childBar}
            onPress={() => { this.updateSwiper(2); }}
          >
            <View>
              <Icon name={'code'} color={'#666'} size={28} />
              <Text style={{ paddingTop: 6 }}>代码</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AlgorithmDetailView;
