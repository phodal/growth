/* eslint-disable no-undef */
import React, { Component } from 'react';
import { ScrollView, Text, View, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as shortid from 'shortid';
import Helper from '../../../utils/helper';

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
    fetch('https://phodal.github.io/growth-api-gitbook/api.json')
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
        <View containerStyle={{ marginBottom: 20 }}>
          {
            rowData.map(sections => (
              <View
                key={shortid.generate()}
              >
                <View><Text>{sections.heading}</Text></View>
                {
                  sections.childrens.map(section => (
                    <ListItem
                      key={shortid.generate()}
                      title={section.title}
                      onPress={() => Helper.openLink(section.href)}
                      subtitle={`类型：${section.type}`}
                    />
                  ))
                }
              </View>
            ))
          }
        </View>
      </ScrollView>
    );
  }
}

export default FreeBookList;
