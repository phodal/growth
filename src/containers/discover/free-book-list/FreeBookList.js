/* eslint-disable no-undef */
import React, { Component } from 'react';
import { ScrollView, Text, View, ActivityIndicator, FlatList, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import Helper from '../../../utils/helper';
import AsyncStorageHelper from '../../../utils/AsyncStorageHelper';

class FreeBookList extends Component {
  static componentName = 'FreeBookList';

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rowData: [],
    };
  }

  componentDidMount() {
    AsyncStorageHelper.get('discover.freebook', (result) => {
      if (result) {
        this.setState({
          loading: false,
          rowData: JSON.parse(result),
        });
      }

      fetch('https://phodal.github.io/growth-api-gitbook/api.json')
      .then(response => response.json())
      .then((data) => {
        const rowData = Array.from(new Array(data.length))
        .map((val, index) => (data[index]));

        AsyncStorageHelper.set('discover.freebook', JSON.stringify(data));
        this.setState({
          loading: false,
          rowData,
        });
      });
    });
  }

  keyExtractor = (item, index) => `key${index}`;

  renderList = ({ item }) => (
    <TouchableHighlight
      onPress={() => Helper.openLink(item.href)}
    >
      <View style={{ backgroundColor: 'white' }}>
        <ListItem
          title={item.title}
          rightIcon={{ name: 'open-in-new' }}
          subtitle={`类型：${item.type}`}
        />
      </View>
    </TouchableHighlight>
  );

  render() {
    const { loading, rowData } = this.state;

    if (loading) {
      return (<View
        style={{ marginTop: 20 }}
      >
        <ActivityIndicator
          animating
          size={'large'}
          color={'#000'}
        />
      </View>);
    }

    return (
      <ScrollView containerStyle={{ marginBottom: 20 }}>
        <FlatList
          data={rowData}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <View>
              <View style={{ padding: 10 }}><Text style={{ textAlign: 'center' }}>{item.heading}</Text></View>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={item.childrens}
                renderItem={this.renderList}
              />
            </View>
            )}
        />
      </ScrollView>
    );
  }
}

export default FreeBookList;
