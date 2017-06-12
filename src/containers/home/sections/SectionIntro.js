/* eslint-disable no-undef,react/forbid-prop-types */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HtmlView from '../../../components/HtmlView';

class SectionIntro extends Component {
  static componentName = 'SectionIntro';

  static propTypes = {
    slug: PropTypes.string.isRequired,
  };

  static defaultProps = {
    slug: '',
  };

  render() {
    return (<HtmlView domain={'desc'} slug={this.props.slug} />);
  }
}

export default connect(({ routes }) => ({ routes }))(SectionIntro);
