import React, { Component, PropTypes } from 'react';
import HtmlView, { NET } from '../../../../components/HtmlView';

class Article extends Component {
  static componentName = 'Article';

  static propTypes = {
    url: PropTypes.string.isRequired,
  };

  static defaultProps = {
    url: '',
  };

  render() {
    return <HtmlView type={NET} url={this.props.url} />;
  }
}
export default Article;
