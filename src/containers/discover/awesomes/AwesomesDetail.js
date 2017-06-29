/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, ActivityIndicator, FlatList, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as shortid from 'shortid';
import Helper from '../../../utils/helper';

class AwesomeLists extends Component {
  static componentName = 'AwesomeLists';

  static propTypes = {
    path: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rowData: [],
    };
  }

  componentDidMount() {
    fetch(`https://phodal.github.io/growth-api-awesome/api/${this.props.path}`)
    .then(response => response.json())
    .then((data) => {
      const rowData = Array.from(new Array(data.length))
      .map((val, index) => (data[index]));

      this.setState({
        loading: false,
        rowData,
      });
    });
  }

  renderList = ({ item }) => (
    <TouchableHighlight
      key={shortid.generate()}
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

  keyExtractor = (item, index) => `key${index}`;

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
