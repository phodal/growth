import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AppStyle from '../../theme/styles';
import Icon from '../../icon/GrowthFont';
import OnLineReadItem from './DiscoverOnlineReadItem';
import MoreItem from './DiscoverMoreItem';

const home1 = require('../../../assets/growth-ui/img/home-1.jpg');
const home2 = require('../../../assets/growth-ui/img/home-2.jpg');
const home3 = require('../../../assets/growth-ui/img/home-3.jpg');

const iconSize = 30;


class Discover extends Component {
  static componentName = 'Discover';

  render = () => (
    <ScrollView style={AppStyle.discoverParentStyle}>
      <View style={{ height: 300 }}>
        <View style={AppStyle.discoverTitle}>
          <Text style={AppStyle.discoverTextColor}>在线资源</Text>
        </View>
        <View style={AppStyle.discoverFirstGrid}>
          <View style={AppStyle.discoverGridFirstItem}>
            <Icon name="icon-social" size={iconSize} style={AppStyle.discoverTextColor} />
            <Text style={AppStyle.discoverGridItem}>学习路线</Text>
          </View>
          <View style={AppStyle.discoverGridLastItem}>
            <Icon name="explore-1-2" size={iconSize} style={AppStyle.discoverTextColor} />
            <Text style={AppStyle.discoverGridItem}>练手项目</Text>
          </View>
        </View>
        <View style={AppStyle.discoverOtherGrid}>
          <View style={AppStyle.discoverGridFirstItem}>
            <Icon name="explore-1-3" size={iconSize} style={AppStyle.discoverTextColor} />
            <Text style={AppStyle.discoverGridItem}>工具箱</Text>
          </View>
          <View style={AppStyle.discoverGridLastItem}>
            <Icon name="explore-1-4" size={iconSize} style={AppStyle.discoverTextColor} />
            <Text style={AppStyle.discoverGridItem}>在线文章</Text>
          </View>
        </View>
      </View>
      <View style={{ height: 420 }}>
        <View style={AppStyle.discoverTitle}>
          <Text style={AppStyle.discoverTextColor}>本地资源</Text>
        </View>
        <View style={AppStyle.discoverFirstGrid}>
          <View style={AppStyle.discoverGridFirstItem}>
            <Icon name="icon-graowth" size={iconSize} style={AppStyle.discoverTextColor} />
            <Text style={AppStyle.discoverGridItem}>技能测验</Text>
          </View>
          <View style={AppStyle.discoverGridLastItem}>
            <Icon name="explore-2-2" size={iconSize} style={AppStyle.discoverTextColor} />
            <Text style={AppStyle.discoverGridItem}>解决方案</Text>
          </View>
        </View>
        <View style={AppStyle.discoverOtherGrid}>
          <View style={AppStyle.discoverGridFirstItem}>
            <Icon name="explore-2-3" size={iconSize} style={AppStyle.discoverTextColor} />
            <Text style={AppStyle.discoverGridItem}>读书路线</Text>
          </View>
          <View style={AppStyle.discoverGridLastItem}>
            <Icon name="explore-2-4" size={iconSize} style={AppStyle.discoverTextColor} />
            <Text style={AppStyle.discoverGridItem}>书籍列表</Text>
          </View>
        </View>
        <View style={AppStyle.discoverOtherGrid}>
          <View style={AppStyle.discoverGridFirstItem}>
            <Icon name="explore-2-5" size={iconSize} style={AppStyle.discoverTextColor} />
            <Text style={AppStyle.discoverGridItem}>文章列表</Text>
          </View>
          <View style={AppStyle.discoverGridLastItem}>
            <Icon name="explore-2-6" size={iconSize} style={AppStyle.discoverTextColor} />
            <Text style={AppStyle.discoverGridItem}>待办事项</Text>
          </View>
        </View>
      </View>
      <View style={{ height: 340 }}>
        <View style={AppStyle.discoverTitle} >
          <Text style={AppStyle.discoverTextColor}>在线阅读</Text>
        </View>
        <OnLineReadItem image={home1} imageFlex={7} title="《Growth: 全栈增长工程师实战》" titleFlex={3} />
        <OnLineReadItem marginTop={15} image={home2} imageFlex={7} title="《Ideabock: 练手项目集》" titleFlex={3} />
      </View>
      <View style={{ height: 190 }}>
        <View style={AppStyle.discoverTitle} >
          <Text style={AppStyle.discoverTextColor}>更多</Text>
        </View>
        <MoreItem image={home3} title="你还需要什么功能？" titleBackgroundColor="rgba(255,255,255, .5)" />
      </View>
    </ScrollView>
  );
}

export default Discover;
