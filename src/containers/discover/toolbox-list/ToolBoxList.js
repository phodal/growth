import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import Api from '../../../utils/api';
import Dialog from '../../../components/dialog';
import SimpleListItem from '../../../components/discover/view/SimpleListItem';
import Launch from '../../../components/discover/Launch';

class ToolBoxList extends Component {
  static componentName = 'ToolBoxList';

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
    Api.get(Api.TOOLBOX_LIST)
      .then(response => this.setState({
        loading: false,
        rowData: Array.from(new Array(response.data.content.length))
          .map((val, index) =>
            response.data.content[index]) }));
  }

  render() {
    const rows = this.state.rowData.map((val, index) => (
      <SimpleListItem
        key={'key'.concat(index)}
        text={val.title}
        click={() => { Launch.toolBoxDetail(val.path); }}
      />
    ));
    return (<ScrollView style={AppStyle.detailBasisStyle}>
      <Dialog show={this.state.loading} content={this.props.dialogContent} />
      {
        !this.state.loading
          ? rows
          : null
      }
    </ScrollView>);
  }
}
export default ToolBoxList;
