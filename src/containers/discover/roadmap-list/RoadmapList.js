import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import Spinkit from 'react-native-spinkit';
import Api from '../../../utils/api';
import AppStyle from '../../../theme/styles';
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
          <View style={{ marginLeft: 15, marginRight: 15, height: 40, flex: 1, justifyContent: 'center' }}>
            <Text>{data.name}</Text>
          </View>
          <Text style={AppStyle.line} />
        </View>
      </TouchableHighlight>
    ));
    return (
      <ScrollView style={{ marginTop: AppSize.navbarHeight, backgroundColor: '#E9EBEE' }} >
        <Spinkit style={{ marginBottom: 50 }} isVisible={this.state.loading} size={50} type={'9CubeGrid'} color={'#03a9f4'} />
        { !this.state.loading ?
          rows : null
        }
      </ScrollView>
    );
  }
}
export default RoadmapList;

