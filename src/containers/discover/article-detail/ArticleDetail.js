import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import CustomWebView from '../../../components/CustomWebView';
import AppStyle from '../../../theme/styles';
import Api from '../../../utils/api';
import Dialog from '../../../components/dialog';

const marked = require('marked');

class ArticleDetail extends Component {
  static componentName = 'ArticleDetail';

  static propTypes = {
    uri: PropTypes.string.isRequired,
    dialogContent: PropTypes.string,
  };

  static defaultProps = {
    uri: '',
    dialogContent: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rowData: '',
    };
  }

  componentDidMount() {
    Api.get(Api.ARTICLE_DETAIL.concat(this.props.uri))
      .then(response => this.setState({
        loading: false,
        rowData: marked(response.data) }));
  }

  render() {
    return (
      <View style={[AppStyle.detailBasisStyle, { flex: 1 }]}>
        <Dialog show={this.state.loading} content={this.props.dialogContent} />
        <CustomWebView html={this.state.rowData} />
      </View>
    );
  }
}
export default ArticleDetail;
