import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AppStyle from '../../theme/styles';
import MoreItem from '../../components/discover/view/DiscoverMoreItem';
import GridItem from '../../components/discover/view/DiscoverGridItem';
import OnLineRead from '../../components/discover/view/DiscoverOnlineReadItem';
import Launch from '../../components/discover/Launch';
import Api from '../../utils/api';

const home1 = require('../../../assets/growth-ui/img/home-1.jpg');
const home2 = require('../../../assets/growth-ui/img/home-2.jpg');
const home3 = require('../../../assets/growth-ui/img/home-3.jpg');

class Discover extends Component {
  static componentName = 'Discover';

  render = () => (
    <ScrollView style={AppStyle.discoverParentStyle}>
      <View style={{ height: 300 }}>
        <View style={AppStyle.discoverTitle}>
          <Text style={AppStyle.discoverTextColor}>在线资源</Text>
        </View>
        <View style={AppStyle.discoverFirstGrid}>
          <GridItem title="学习路线" iconName="icon-social" position={'left'} onclick={() => { Launch.roadmapList(); }} />
          <GridItem title="练手项目" iconName="explore-1-2" position={'right'} onclick={() => { Launch.projectList(); }} />
        </View>
        <View style={AppStyle.discoverOtherGrid}>
          <GridItem title="工具箱" iconName="explore-1-3" position={'left'} onclick={() => { Launch.toolBox(); }} />
          <GridItem title="在线文章" iconName="explore-1-4" position={'right'} onclick={() => { Launch.articleList(); }} />
        </View>
      </View>
      <View style={{ height: 420 }}>
        <View style={AppStyle.discoverTitle}>
          <Text style={AppStyle.discoverTextColor}>本地资源</Text>
        </View>
        <View style={AppStyle.discoverFirstGrid}>
          <GridItem title="技能测验" iconName="icon-graowth" position={'left'} onclick={() => { Launch.examList(); }} />
          <GridItem title="解决方案" iconName="explore-2-2" position={'right'} onclick={() => { Launch.solution(); }} />
        </View>
        <View style={AppStyle.discoverOtherGrid}>
          <GridItem title="读书路线" iconName="explore-2-3" position={'left'} onclick={() => { Launch.thoughtworksBooks(); }} />
          <GridItem title="书籍列表" iconName="explore-2-4" position={'right'} onclick={() => { Launch.recommendBooks(); }} />
        </View>
        <View style={AppStyle.discoverOtherGrid}>
          <GridItem title="文章列表" iconName="explore-2-5" position={'left'} onclick={() => { Launch.recommendArticles(); }} />
          <GridItem title="待办事项" iconName="explore-2-6" position={'right'} onclick={() => { Launch.todoLists(); }} />
        </View>
      </View>
      <View style={{ height: 490 }}>
        <View style={AppStyle.discoverTitle} >
          <Text style={AppStyle.discoverTextColor}>在线阅读</Text>
        </View>
        <OnLineRead
          image={home1}
          title={'《Growth: 全栈增长工程师实战》'}
          onclick={() => { Launch.chapterList('《Growth: 全栈增长工程师实战》', Api.GROWTH_IN_ACTION); }}
        />
        <OnLineRead
          image={home2}
          title={'《Ideabook: 练手项目集》'}
          top={15} onclick={() => { Launch.chapterList('《Ideabook: 练手项目集》', Api.IDEA_BOOK); }}
        />
        <OnLineRead
          image={home3}
          title={'《我的职业是前端工程师》'}
          top={15} onclick={() => { Launch.chapterList('《我的职业是前端工程师》', Api.FE); }}
        />
      </View>
      <View style={{ height: 190 }}>
        <View style={AppStyle.discoverTitle} >
          <Text style={AppStyle.discoverTextColor}>更多</Text>
        </View>
        <MoreItem
          image={home3}
          title="你还需要什么功能？"
          titleBackgroundColor="rgba(255,255,255, .5)"
          onclick={() => { Launch.openGitHub('https://github.com/phodal/growth-ng/issues'); }}
        />
      </View>
    </ScrollView>
  );
}

export default Discover;
