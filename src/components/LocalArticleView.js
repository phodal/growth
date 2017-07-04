import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HtmlView from './HtmlView';

import { saveArticle } from '../redux/article/actions';
import BookmarkHelper from '../utils/BookmarkHelper';

class LocalArticleView extends Component {
  static componentName = 'Article';

  static propTypes = {
    slug: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    slug: '',
  };

  componentWillMount() {
    BookmarkHelper.setSlug(this.props.slug);
  }

  componentDidMount() {
    this.props.dispatch(saveArticle(this.props.slug));
  }

  render() {
    return <HtmlView domain={'article'} slug={this.props.slug} />;
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalArticleView);

