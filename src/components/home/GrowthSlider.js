/* eslint-disable global-require,import/no-dynamic-require */
import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Actions } from 'react-native-router-flux';

import GridItem from '../discover/view/DiscoverGridItem';
import Launch from '../discover/Launch';


const sliderWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  item: { height: 80, backgroundColor: '#fff', width: 120, borderRadius: 6 },
});

const GrowthSlider = () => (
  <Carousel
    refs={(carousel) => {
      this.carousel = carousel;
    }}
    sliderWidth={sliderWidth}
    itemWidth={120}
    itemHeight={80}
    firstItem={2}
    sliderHeight={120}
  >
    <View style={styles.item}>
      <GridItem title="在线电子书" iconName="icon-social" position={'left'} onclick={() => { Launch.freeBookList(); }} />
    </View>
    <View style={styles.item}>
      <GridItem title="学习路线" iconName="icon-social" position={'left'} onclick={() => { Launch.roadmapList(); }} />
    </View>
    <View style={styles.item}>
      <GridItem title="工具箱" iconName="explore-1-3" position={'left'} onclick={() => { Launch.toolBox(); }} />
    </View>
    <View style={styles.item}>
      <GridItem title="技能测验" iconName="icon-graowth" position={'left'} onclick={() => { Launch.examList(); }} />
    </View>
    <View style={styles.item}>
      <GridItem title="读书路线" iconName="explore-2-3" position={'left'} onclick={() => { Launch.thoughtworksBooks(); }} />
    </View>
    <View style={styles.item}>
      <GridItem title="更多" iconName="explore-2-1" position={'left'} onclick={() => { Actions.discover(); }} />
    </View>
  </Carousel>
);

export default GrowthSlider;
