/* eslint-disable no-undef */
import React, { Component } from 'react';
import { FlatList, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const values = require('lodash.values');
const algorithmList = values(require('./growth-algorithm-api/category.json'));

class AlgorithmListView extends Component {
  static componentName = 'AlgorithmListView';

  constructor(props) {
    super(props);
  }

  keyExtractor = (item, index) => `key${index}`;

  renderList = ({ item }) => (
    <TouchableHighlight
      onPress={() => Actions.algorithmDetailView({
        item,
        title: item.title })}
    >
      <View style={{ backgroundColor: 'white' }}>
        <ListItem
          title={item.title}
        />
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <ScrollView>
        <FlatList
          data={algorithmList}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <View>
              <View style={{ padding: 10 }}>
                <Text style={{ textAlign: 'center' }}>{item.zh_name}</Text>
              </View>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={item.list}
                renderItem={this.renderList}
              />
            </View>
            )}
        />
      </ScrollView>
    );
  }
}

export default AlgorithmListView;
