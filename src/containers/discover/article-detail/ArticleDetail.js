import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import Api from '../../../utils/api';
import Dialog from '../../../components/dialog';
import HtmlView from '../../../components/htmlview/HtmlView';

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
      rowData: null,
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
      <ScrollView style={AppStyle.detailBasisStyle}>
        <Dialog show={this.state.loading} content={this.props.dialogContent} />
        <HtmlView value={this.state.rowData} />
      </ScrollView>
    );
  }
}
export default ArticleDetail;
