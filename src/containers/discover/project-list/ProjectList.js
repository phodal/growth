import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import Api from '../../../utils/api';
import AppStyle from '../../../theme/styles';
import GroupList from './ProjectListItem';
import Dialog from '../../../components/dialog';

async function load(call) {
  Api.getProjectListData()
    .then(response => (call(response.data)))
    .catch(error => (error));
}

class ProjectList extends Component {
  static componentName = 'ProjectList';

  static propTypes = {
    dialogContent: PropTypes.string,
  };

  static defaultProps = {
    dialogContent: '',
  };

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
      <ScrollView style={[AppStyle.detailBasisStyle, { backgroundColor: '#E9EBEE' }]}>
        <Dialog show={this.state.loading} content={this.props.dialogContent} />
        {!this.state.loading ?
          rows : null
        }
      </ScrollView>);
  }

}
export default ProjectList;
