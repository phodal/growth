import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HtmlView, { NET } from '../../../../components/HtmlView';

class Article extends Component {
  static componentName = 'Article';

  static propTypes = {
    url: PropTypes.string.isRequired,
    dialogContent: PropTypes.string,
  };

  static defaultProps = {
    url: '',
    dialogContent: '',
  };

  render() {
    return <HtmlView type={NET} url={this.props.url} dialogContent={this.props.dialogContent} />;
  }
}
export default Article;
