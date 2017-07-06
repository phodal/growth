import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
        <Text style={{ padding: 20, textAlign: 'center' }}> 这个功能在 TODO List 里，如果你需要请点个赞</Text>

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
    );
  }
}

export default AlgorithmDetailView;
