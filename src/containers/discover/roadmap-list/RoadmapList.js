import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import Api from '../../../utils/api';
import AppSize from '../../../theme/sizes';
import Launch from '../Launch';

async function load(call) {
  Api.getRoadMapListData()
    .then(response => (call(response.data)))
    .catch(error => (error));
}

class RoadmapList extends Component {
  static componentName = 'RoadmapList';

  constructor(props) {
    super(props);
    this.state = {
      rowData: [],
    };
    load((json => (
      this.setState(
        this.state.rowData = (
          Array.from(new Array(json.content.length)).map(
            (val, index) => (
              json.content[index])))))));
  }
  render() {
    const rows = this.state.rowData.map(data => (
      <TouchableHighlight
        onPress={() => { Launch.roadmapDetail(data.name.concat('学习路线'), data.timeline); }}
        underlayColor="rgba(250, 250, 250, .9)"
        key={data.name}
        style={{ backgroundColor: 'white' }}
      >
        <View style={{ marginLeft: 15, marginRight: 15 }}>
          <Text style={{ flex: 1, height: 40, lineHeight: 40 }}>{data.name}</Text>
          <Text style={{ flex: 1, height: 1, backgroundColor: 'rgba(240, 240, 240, .9)' }} />
        </View>
      </TouchableHighlight>
    ));
    return (
      <ScrollView style={{ marginTop: AppSize.navbarHeight }} >
        {rows}
      </ScrollView>
    );
  }
}
export default RoadmapList;

