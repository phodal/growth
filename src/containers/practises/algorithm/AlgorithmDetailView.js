import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, ScrollView, TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';


const styles = StyleSheet.create({
  tabbar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 44,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

class AlgorithmDetailView extends Component {
  static componentName = 'AlgorithmDetailView';

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'detail',
    };
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View>
          <Text style={{ padding: 20, textAlign: 'center' }}> 这个功能在 TODO List 里，如果你需要请点个赞</Text>
        </View>

        <View style={{ height: 200 }}>
          <Swiper style={styles.wrapper}>
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

        <View style={styles.tabar}>
          <TouchableOpacity>
            <View>
              <Text>Detail</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Detail</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Detail</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AlgorithmDetailView;
