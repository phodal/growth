/* eslint-disable import/no-dynamic-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, ScrollView, TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Icon } from 'react-native-elements';


const styles = StyleSheet.create({
  wrapper: {
    height: 160,
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
    height: 60,
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
    const path = `./growth-algorithm-api/${this.props.category}/${this.props.item.key}/desc.json`;
// eslint-disable-next-line global-require
    const algorithmInfo = require(path);
    this.setState({
      algorithmInfo,
    });
    console.log(algorithmInfo);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View>
          <Text style={{ padding: 20, textAlign: 'center' }}> 这个功能在 TODO List 里，如果你需要请点个赞</Text>
        </View>

        <View>
          <Swiper
            style={styles.wrapper}
            ref={(swiper) => { this.swiper = swiper; }}
          >
            <ScrollView contentContainerStyle={styles.slide}>
              <Text style={styles.text}>Hello Swiper</Text>
            </ScrollView>
            <ScrollView contentContainerStyle={styles.slide}>
              <Text style={styles.text}>Beautiful</Text>
            </ScrollView>
            <ScrollView contentContainerStyle={styles.slide}>
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
