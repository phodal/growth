import React, { Component, PropTypes } from 'react';
import HtmlView from '../../../../components/HtmlView';

class Article extends Component {
  static componentName = 'Article';

  static propTypes = {
    slug: PropTypes.string.isRequired,
  };

  static defaultProps = {
    slug: '',
  };

  render() {
    return <HtmlView domain={'review'} slug={this.props.slug} />;
  }
}
export default Article;
