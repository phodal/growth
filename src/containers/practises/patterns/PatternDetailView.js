import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HTMLView from 'react-native-htmlview';

const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();

class PatternDetailView extends Component {
  static componentName = 'PatternDetailView';

  static propTypes = {
    item: React.PropTypes.shape({
      name: PropTypes.string,
      fileName: PropTypes.string,
      path: PropTypes.string,
      pattern: PropTypes.string,
    }).isRequired,
  };

  render() {
    const content = md.render(this.props.item.pattern);

    return (
      <HTMLView
        value={content}
        addLineBreaks={false}
        style={{ padding: 10, borderBottomWidth: 1, backgroundColor: '#fff', borderBottomColor: '#ddd' }}
      />
    );
  }
}

export default PatternDetailView;
