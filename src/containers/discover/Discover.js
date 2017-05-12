import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AppStyle from '../../theme/styles';
import OnLineReadItem from './DiscoverOnlineReadItem';
import MoreItem from './DiscoverMoreItem';
import GridItem from './DiscoverGridItem';

const home1 = require('../../../assetc/growth-ui/img/home-1.jpg');
const home2 = require('../../../assetc/growth-ui/img/home-2.jpg');
const home3 = require('../../../assetc/growth-ui/img/home-3.jpg');

class Discover extends Component {
  static componentName = 'Discover';

  render = () => (
    <ScrollView style={AppStyle.discoverParentStyle}>
      <View style={{ height: 300 }}>
        <View style={AppStyle.discoverTitle}>
          <Text style={AppStyle.discoverTextColor}>在线资源</Text>
        </View>
        <View style={AppStyle.discoverFirstGrid}>
          <GridItem title="学习路线" iconName="icon-social" direction={'left'} />
          <GridItem title="练手项目" iconName="explore-1-2" direction={'right'} />
        </View>
        <View style={AppStyle.discoverOtherGrid}>
          <GridItem title="工具箱" iconName="explore-1-3" direction={'left'} />
          <GridItem title="在线文章" iconName="explore-1-4" direction={'right'} />
        </View>
      </View>
      <View style={{ height: 420 }}>
        <View style={AppStyle.discoverTitle}>
          <Text style={AppStyle.discoverTextColor}>本地资源</Text>
        </View>
        <View style={AppStyle.discoverFirstGrid}>
          <GridItem title="技能测验" iconName="icon-graowth" direction={'left'} />
          <GridItem title="解决方案" iconName="explore-2-2" direction={'right'} />
        </View>
        <View style={AppStyle.discoverOtherGrid}>
          <GridItem title="读书路线" iconName="explore-2-3" direction={'left'} />
          <GridItem title="书籍列表" iconName="explore-2-4" direction={'right'} />
        </View>
        <View style={AppStyle.discoverOtherGrid}>
          <GridItem title="文章列表" iconName="explore-2-5" direction={'left'} />
          <GridItem title="待办事项" iconName="explore-2-6" direction={'right'} />
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
