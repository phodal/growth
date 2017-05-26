import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SuperCardView from '../../components/SuperCardView';

class Home extends Component {
  static componentName = 'Home';

  render() {
    return (
      <ScrollView>
        <SuperCardView />
      </ScrollView>
    );
  }
}

export default Home;
