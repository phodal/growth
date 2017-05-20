import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import Api from '../../../utils/api';
import Dialog from '../../../components/dialog';
import SimpleListItem from '../SimpleListItem';
import Launch from '../Launch';

async function load(call) {
  Api.getToolBoxData()
    .then(response => (call(response.data)))
    .catch(error => error);
}

class ToolBoxList extends Component {
  static componentName = 'ToolBoxList';

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rowData: [],
    };
  }

  componentDidMount() {
    load(json => (
      this.setState({
        loading: false,
        rowData: Array.from(new Array(json.content.length))
        .map((val, index) => json.content[index]) })
     ));
  }

  render() {
    const rows = this.state.rowData.map(val => (
      <SimpleListItem
        key={val.title}
        text={val.title}
        click={() => { Launch.toolBoxDetail(val.path); }}
      />
    ));
    return (<ScrollView style={AppStyle.detailBasisStyle}>
      <Dialog show={this.state.loading} />
      {
        !this.state.loading ?
        rows : null
      }
    </ScrollView>);
  }
}
export default ToolBoxList;
