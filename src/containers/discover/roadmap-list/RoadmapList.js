import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Api from '../../../utils/api';
import AppStyle from '../../../theme/styles';
import Launch from '../Launch';
import Dialog from '../../../components/dialog';
import SimpleListItem from '../SimpleListItem';

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
      <SimpleListItem
        key={data.name}
        text={data.name}
        click={() => { Launch.roadmapDetail(data.name.concat('学习路线'), data.timeline); }}
      />
    ));

    return (
      <ScrollView style={AppStyle.detailBasisStyle} >
        <Dialog show={this.state.loading} />
        { !this.state.loading ?
            rows : null
          }
      </ScrollView>
    );
  }
}
export default RoadmapList;

