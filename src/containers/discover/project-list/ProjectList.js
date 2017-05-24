import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import Api from '../../../utils/api';
import AppStyle from '../../../theme/styles';
import GroupList from '../../../components/discover/project-list/view/ProjectListItem';
import Dialog from '../../../components/dialog';

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
    Api.get(Api.PROJECT_LIST)
      .then(response => (
        this.setState({
          loading: false,
          rowData: Array.from(new Array(response.data.content.length))
            .map((val, index) => (response.data.content[index])) })
      ));
  }

  render() {
    const rows = this.state.rowData.map((val, index) => (
      <GroupList key={val.name} content={this.state.rowData[index]} />));
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        <Dialog show={this.state.loading} content={this.props.dialogContent} />
        {
          !this.state.loading
            ? rows
            : null
        }
      </ScrollView>);
  }
}
export default ProjectList;
