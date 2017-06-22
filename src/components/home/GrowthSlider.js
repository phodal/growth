/* eslint-disable global-require,import/no-dynamic-require */
import React from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import GridItem from '../discover/view/DiscoverGridItem';
import Launch from '../discover/Launch';

const sliderWidth = Dimensions.get('window').width;

const GrowthSlider = () => (
  <Carousel
    sliderWidth={sliderWidth}
    itemWidth={120}
    itemHeight={80}
    firstItem={2}
    sliderHeight={80}
  >
    <View style={{ height: 80, backgroundColor: '#fff', width: 120, borderRadius: 6 }}>
      <GridItem title="在线电子书" iconName="icon-social" position={'left'} onclick={() => { Launch.freeBookList(); }} />
    </View>
    <View style={{ height: 80, backgroundColor: '#fff', width: 120, borderRadius: 6 }}>
      <GridItem title="学习路线" iconName="icon-social" position={'left'} onclick={() => { Launch.roadmapList(); }} />
    </View>
    <View style={{ height: 80, backgroundColor: '#fff', width: 120, borderRadius: 6 }}>
      <GridItem title="工具箱" iconName="explore-1-3" position={'left'} onclick={() => { Launch.toolBox(); }} />
    </View>
    <View style={{ height: 80, backgroundColor: '#fff', width: 120, borderRadius: 6 }}>
      <GridItem title="技能测验" iconName="icon-graowth" position={'left'} onclick={() => { Launch.examList(); }} />
    </View>
    <View style={{ height: 80, backgroundColor: '#fff', width: 120, borderRadius: 6 }}>
      <GridItem title="读书路线" iconName="explore-2-3" position={'left'} onclick={() => { Launch.thoughtworksBooks(); }} />
    </View>
  </Carousel>
);

export default GrowthSlider;
