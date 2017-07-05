import React, { Component } from 'react';
import { FlatList, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { ListItem } from 'react-native-elements';

const values = require('lodash.values');
const algorithmList = values(require('./growth-algorithm-api/category.json'));

class AlgorithmListView extends Component {
  static componentName = 'AlgorithmListView';

  keyExtractor = (item, index) => `key${index}`;

  renderList = ({ item }) => (
    <TouchableHighlight>
      <View style={{ backgroundColor: 'white' }}>
        <ListItem
          title={item}
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
                data={Object.values(item.list)}
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
