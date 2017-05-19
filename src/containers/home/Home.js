import React, { Component } from 'react';
import { View } from 'react-native';
import SuperCardView from '../../components/SuperCardView';

class Home extends Component {
  static componentName = 'Home';

  render = () => (
    <View>
      <SuperCardView title={'从零开始'} subTitle={'从这里准备开始你的技术图谱修炼之路'} iconName={'md-home'} />
    </View>
  );
}

export default Home;
