/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Search from 'react-native-search-box';
import { Button, List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

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
      <View>
        <View>
          <Button
            icon={{ name: 'exit-to-app' }}
            title="Growth 应用"
            borderRadius={6}
            backgroundColor={'#03a9f4'}
            onPress={() => Actions.growthView()}
          />
          <Button
            icon={{ name: 'exit-to-app' }}
            title="Growth 技能树"
            borderRadius={6}
            style={{ paddingTop: 20 }}
            backgroundColor={'#03a9f4'}
            onPress={() => Actions.skillTree()}
          />
        </View>

        <View style={{ paddingTop: 20 }}>
          <Text>为您推荐</Text>
          <List>
            <ListItem
              title="example"
            />
          </List>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text>今日精选</Text>
          <List>
            <ListItem
              title="example"
            />
          </List>
        </View>
      </View>
      );

    return (
      <ScrollView>
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
              <Text>Text in Test</Text>
            </View> : homeView
        }
      </ScrollView>
    );
  }
}

export default Home;
