/* eslint-disable no-undef */
import React, { Component } from 'react';
import { ScrollView, Text, View, ActivityIndicator, FlatList, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as shortid from 'shortid';
import { Actions } from 'react-native-router-flux';
import AsyncStorageHelper from '../../../utils/AsyncStorageHelper';
import Api from '../../../utils/api';

class AwesomeLists extends Component {
  static componentName = 'AwesomeLists';

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rowData: [],
    };
  }

  componentDidMount() {
    AsyncStorageHelper.get('discover.awesomes', (result) => {
      if (result) {
        this.setState({
          loading: false,
          rowData: JSON.parse(result),
        });
      }

      Api.get(Api.AWESOMES)
        .then(response => response.data)
        .then((data) => {
          const rowData = Array.from(new Array(data.length))
            .map((val, index) => (data[index]));

          AsyncStorageHelper.set('discover.awesomes', JSON.stringify(data));
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
      key={shortid.generate()}
      onPress={() => Actions.awesomesDetail({ title: item.title, path: item.slug })}
    >
      <View style={{ backgroundColor: 'white' }}>
        <ListItem
          title={item.title}
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
      <ScrollView>
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

export default AwesomeLists;
