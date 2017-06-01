import React, { Component, PropTypes } from 'react';
import HtmlView from './HtmlView';

class LocalArticleView extends Component {
  static componentName = 'Article';

  static propTypes = {
    slug: PropTypes.string.isRequired,
  };

  static defaultProps = {
    slug: '',
  };

  render() {
    return <HtmlView domain={'article'} slug={this.props.slug} />;
  }
}
export default LocalArticleView;
