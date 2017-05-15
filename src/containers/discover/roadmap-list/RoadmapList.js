import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import Api from '../../../utils/api';
import AppStyle from '../../../theme/styles';
import Launch from '../Launch';
import Dialog from '../../../utils/dialog';

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
      loading: true,
      rowData: [],
    };
  }

  componentDidMount() {
    load((json => (
      this.setState(
        {
          loading: false,
          rowData: Array.from(new Array(json.content.length)).map((val, index) => (
            json.content[index])),
        },
      ))));
  }

  render() {
    const rows = this.state.rowData.map(data => (
      <TouchableHighlight
        onPress={() => { Launch.roadmapDetail(data.name.concat('学习路线'), data.timeline); }}
        underlayColor="rgba(250, 250, 250, .9)"
        key={data.name}
        style={{ backgroundColor: 'white' }}
      >
        <View>
          <View style={AppStyle.roadmapListStyle}>
            <Text>{data.name}</Text>
          </View>
          <Text style={AppStyle.line} />
        </View>
      </TouchableHighlight>
    ));

    return (
      <ScrollView style={[AppStyle.detailMarginTop, { backgroundColor: '#E9EBEE' }]} >
        <Dialog show={this.state.loading} />
        { !this.state.loading ?
            rows : <View />
          }
      </ScrollView>
    );
  }
}
export default RoadmapList;

