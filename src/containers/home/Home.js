import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Search from 'react-native-search-box';
import SuperCardView from '../../components/SuperCardView';

class Home extends Component {
  static componentName = 'Home';
  searchBox = null;

  render() {
    return (
      <ScrollView>
        <View style={{ paddingTop: 5, paddingBottom: 5 }}>
          <Search
            ref={searchBox => (this.searchBox = searchBox)}
            cancelTitle={'取消'}
            backgroundColor={'#fff'}
          />
        </View>

        <SuperCardView />
      </ScrollView>
    );
  }
}

export default Home;
