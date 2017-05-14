import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Api from '../../../utils/api';
import AppSize from '../../../theme/sizes';
import GroupList from './ProjectListItem';

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
    const rows = this.state.rowData.map((val, index) => (
      <GroupList key={val.name} content={this.state.rowData[index]} />));
    return (
      <ScrollView style={{ marginTop: AppSize.navbarHeight }}>
        {rows}
      </ScrollView>);
  }

}
export default ProjectList;
