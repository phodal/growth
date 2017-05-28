import React, { Component, PropTypes } from 'react';
import HtmlView from '../../../components/HtmlView';

class SolutionDetail extends Component {
  static componentName = 'SolutionDetailView';

  static propTypes = {
    slug: PropTypes.string.isRequired,
  };

  static defaultProps = {
    slug: '',
  };

  render() {
    return <HtmlView domain={'solution'} slug={this.props.slug} />;
  }
}
export default SolutionDetail;
