/* eslint-disable import/no-dynamic-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, ScrollView, TouchableOpacity, Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Divider, Icon, Text } from 'react-native-elements';
import ALGORITHMS from './ALGORITHMS';
import AppSizes from '../../../theme/sizes';


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
  childBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewHeight: {
    height: (height - AppSizes.tabbarHeight - AppSizes.navbarHeight) / 2,
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
    this.state = {
      algorithmInfo: null,
      selectedTab: 'detail',
    };
  }

  componentWillMount() {
    const algorithmInfo = ALGORITHMS[this.props.category][this.props.item.key];
    this.setState({
      algorithmInfo,
    });
  }

  render() {
    const { algorithmInfo } = this.state;
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={styles.viewHeight}>
          <Text style={{ textAlign: 'center' }}> 这个功能在 TODO List 里，如果你需要请点个赞</Text>
        </View>

        <View style={styles.viewHeight}>
          <Swiper
            style={styles.wrapper}
            height={styles.viewHeight}
            ref={(swiper) => { this.swiper = swiper; }}
          >
            <ScrollView contentContainerStyle={[styles.slide]}>
              <Text>{algorithmInfo.name}</Text>
              <Text style={styles.text}>{algorithmInfo.description}</Text>

              <Text>复杂度</Text>
              <Text style={styles.text}>时间：{algorithmInfo.complexity.time}</Text>
              <Text style={styles.text}>空间：{algorithmInfo.complexity.space}</Text>

              <Text>参考资料</Text>
              <Text style={styles.text}>{algorithmInfo.references[0]}</Text>
            </ScrollView>
            <ScrollView contentContainerStyle={[styles.viewHeight, styles.slide]}>
              <Text style={styles.text}>Beautiful</Text>
            </ScrollView>
            <ScrollView contentContainerStyle={[styles.viewHeight, styles.slide]}>
              <Text style={styles.text}>And simple</Text>
            </ScrollView>
          </Swiper>
        </View>

        <View style={styles.tabbar}>
          <TouchableOpacity
            style={styles.childBar}
            onPress={() => { this.swiper.scrollBy(1); }}
          >
            <View>
              <Icon name={'device-hub'} color={'#666'} size={28} />
              <Text style={{ paddingTop: 6 }}>介绍</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.childBar}
            onPress={() => { this.swiper.scrollBy(2); }}
          >
            <View>
              <Icon name={'assessment'} color={'#666'} size={28} />
              <Text style={{ paddingTop: 6 }}>执行</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.childBar}
            onPress={() => { this.swiper.scrollBy(3); }}
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
