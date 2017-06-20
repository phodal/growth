import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HtmlView, { NET } from '../../../components/HtmlView';
import Api from '../../../utils/api';

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

  render() {
    return (
      <HtmlView
        type={NET}
        url={Api.ARTICLE_DETAIL.concat(this.props.uri)}
        dialogContent={this.props.dialogContent}
      />);
  }
}
export default ArticleDetail;
