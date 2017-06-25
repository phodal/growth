/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Search from 'react-native-search-box';
import { Button, Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import GrowthImageCard from '../../components/home/GrowthImageCard';
import GrowthSlider from '../../components/home/GrowthSlider';
import GrowthCard from "../../components/home/GrowthCard";

class Home extends Component {
  static componentName = 'Home';
  static searchBox = null;

  constructor(props) {
    super(props);

    this.state = {
      inSearch: false,
      data: {},
    };
  }

  // Important: You must return a Promise
  onFocus = text => new Promise((resolve, reject) => {
    this.setState({
      inSearch: true,
    });
    resolve();
  });

  onCancel = text => new Promise((resolve, reject) => {
    this.setState({
      inSearch: false,
    });
    resolve();
  });

  onChangeText = text => new Promise((resolve, reject) => {
    this.setState({
      inSearch: true,
    });
    resolve();
  });

  afterFocus = text => new Promise((resolve, reject) => {
    this.setState({
      inSearch: false,
    });
    resolve();
  });

  render() {
    const homeView = (
      <View style={{ paddingBottom: 20 }}>
        <GrowthImageCard
          imageUrl={require('../../../assets/growth-ui/img/home-5.jpg')}
          action={Actions.growthView}
          text={'Growth 指南'}
        />
        <GrowthImageCard
          imageUrl={require('../../../assets/growth-ui/img/home-6.jpg')}
          action={Actions.skillTree}
          text={'Growth 技能树'}
        />

        <View style={{ paddingTop: 20 }}>
          <Text style={{ paddingLeft: 20, paddingBottom: 10 }}>探索</Text>
          <GrowthSlider />
        </View>

        <View style={{ paddingTop: 20 }}>
          <Text style={{ paddingLeft: 20 }}>今日精选</Text>
          <GrowthCard
            imageUrl={require('../../../assets/growth-ui/img/home-4.jpg')}
            action={Actions.leetCodeView}
            title={'LeetCode'}
            intro={'LeetCode 包含了很多公司面试应聘者的算法题。在 Growth 3.0 中，您可以下载 LeetCode 的题目在本地练习。'}
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={{ paddingLeft: 20 }}>为您推荐</Text>
          <GrowthCard
            imageUrl={require('../../../assets/growth-ui/img/home-5.jpg')}
            action={Actions.awesomeLists}
            title={'Awesome'}
            intro={'Awesome 项目集合了不同语言、工具的列表。在 Growth 3.0 中，可以查看所有的项目。'}
          />
        </View>
      </View>
      );

    return (
      <ScrollView style={{ paddingBottom: 20 }}>
        <View style={{ paddingTop: 5, paddingBottom: 5 }}>
          <Search
            ref={searchBox => (this.searchBox = searchBox)}
            cancelTitle={'取消'}
            titleCancelColor={'#444'}
            backgroundColor={'#fff'}
            onFocus={this.onFocus}
            afterFocus={this.afterFocus}
            onCancel={this.onCancel}
            onDelete={this.onCancel}
            onChangeText={this.onChangeText}
          />
        </View>

        {
          this.state.inSearch ?
            <View>
              <Text style={{ backgroundColor: '#fff', textAlign: 'center', paddingTop: 20 }}>功能实现中。。。</Text>
              <ActivityIndicator
                animating
                size={'large'}
                color={'#000'}
                style={{ paddingTop: 20, backgroundColor: '#fff', height: 200 }}
              />
            </View> : homeView
        }
      </ScrollView>
    );
  }
}

export default Home;
