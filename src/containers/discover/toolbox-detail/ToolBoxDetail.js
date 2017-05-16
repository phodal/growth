import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';
import AppStyle from '../../../theme/styles';
import Api from '../../../utils/api';
import Dialog from '../../../utils/dialog';

async function load(url, call) {
  Api.getToolBoxDetailData(url)
    .then(response => call(response.data))
    .catch(error => console.error(error));
}

class ToolBoxDetail extends Component {
  static componentName = 'ToolBoxDetail';

  static propTypes = {
    url: PropTypes.string.isRequired,
  };

  static defaultProps = {
    url: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rowData: '',
    };
  }

  componentDidMount() {
    load(this.props.url, json => (
      this.setState({
        loading: false,
        rowData: JSON.stringify(json),
      })
    ));
  }

  render() {
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        <Dialog show={this.state.loading} />
        <Text>
          {this.state.rowData}
        </Text>
      </ScrollView>
    );
  }
}
export default ToolBoxDetail;
