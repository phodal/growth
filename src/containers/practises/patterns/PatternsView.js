/* eslint-disable no-undef */
import React, { Component } from 'react';
import { ScrollView, View, ActivityIndicator, FlatList, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as shortid from 'shortid';
import { Actions } from 'react-native-router-flux';
import AsyncStorageHelper from '../../../utils/AsyncStorageHelper';


class PatternsView extends Component {
  static componentName = 'PatternsView';


  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rowData: [],
    };
  }

  componentDidMount() {
    AsyncStorageHelper.get('practise.patterns', (result) => {
      if (result) {
        this.setState({
          loading: false,
          rowData: JSON.parse(result),
        });
      }

      fetch('https://phodal.github.io/growth-dp-api/api.json')
      .then(response => response.json())
      .then((data) => {
        const rowData = Array.from(new Array(data.length))
        .map((val, index) => (data[index]));

        AsyncStorageHelper.set('practise.patterns', JSON.stringify(data));
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
      onPress={() => Actions.patternDetailView({ item, title: item.name })}
    >
      <View style={{ backgroundColor: 'white' }}>
        <ListItem
          title={item.name}
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
          renderItem={this.renderList}
        />
      </ScrollView>
    );
  }
}

export default PatternsView;
