/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SuperCardView from '../../components/SuperCardView';

class GrowthView extends Component {
  static componentName = 'GrowthView';

  render() {
    return (
      <ScrollView>
        <SuperCardView />
      </ScrollView>
    );
  }
}

export default GrowthView;
