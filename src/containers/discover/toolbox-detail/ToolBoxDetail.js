import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import CustomWebView from '../../../components/CustomWebView';
import AppStyle from '../../../theme/styles';
import Api from '../../../utils/api';
import Dialog from '../../../components/dialog';

const marked = require('marked');

class ToolBoxDetail extends Component {
  static componentName = 'ToolBoxDetail';

  static propTypes = {
    url: PropTypes.string.isRequired,
    dialogContent: PropTypes.string,
  };

  static defaultProps = {
    url: '',
    dialogContent: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      html: '',
    };
  }

  componentDidMount() {
    Api.get(Api.TOOLBOX_DETAIL.concat(this.props.url))
      .then(response => this.setState({
        loading: false,
        html: marked(response.data) }));
  }

  render() {
    return (
      <View style={[AppStyle.detailBasisStyle, { flex: 1 }]}>
        <Dialog show={this.state.loading} content={this.props.dialogContent} />
        <CustomWebView html={this.state.html} />
      </View>
    );
  }
}
export default ToolBoxDetail;
