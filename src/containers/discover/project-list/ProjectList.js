import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Api from '../../../utils/api';
import AppStyle from '../../../theme/styles';
import GroupList from './ProjectListItem';
import Dialog from './../../../utils/dialog';

async function load(call) {
  Api.getProjectListData()
    .then(response => (call(response.data)))
    .catch(error => (error));
}

class ProjectList extends Component {
  static componentName = 'ProjectList';


  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rowData: [],
    };
  }

  componentDidMount() {
    load((json => (
      this.setState({
        loading: false,
        rowData: Array.from(new Array(json.content.length))
          .map((val, index) => (json.content[index])) })
    )));
  }

  render() {
    const rows = this.state.rowData.map((val, index) => (
      <GroupList key={val.name} content={this.state.rowData[index]} />));
    return (
      <ScrollView style={AppStyle.detailMarginTop}>
        <Dialog show={this.state.loading} />
        {!this.state.loading ?
          rows : <View />
        }
      </ScrollView>);
  }

}
export default ProjectList;
