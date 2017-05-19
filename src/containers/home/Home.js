import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import AppColors from '../../theme/colors';


const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    margin: 10,
    height: 100,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 1, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  },
});

class Home extends Component {
  static componentName = 'Home';

  render = () => (
    <View style={styles.cardContainer}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'column', margin: 15 }}>
          <View style={{ height: 40 }}>
            <Text style={{ fontSize: 20, marginTop: 5, marginBottom: 15 }}>从零开始</Text>
          </View>
          <View style={{ height: 40 }}>
            <Text style={{ marginTop: 5, marginBottom: 15 }}>
              从这里准备开始你的技术图谱修炼之路
            </Text>
          </View>
        </View>
      </View>
      <View style={{ height: 100, alignItems: 'flex-end', left: -10 }}>
        <Icon size={100} name={'md-home'} type={'ionicon'} color={AppColors.brand.primary} />
      </View>
    </View>
  );
}

export default Home;
