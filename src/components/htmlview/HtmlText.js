import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';

function getTextStyle(node) {
  return (
  node.parent &&
  node.parent.parent &&
  /blockquote|code/.test(node.parent.parent.name))
    ? { color: '#4c4c4c' }
    : { color: '#000' };
}

class HtmlText extends Component {
  static componentName = 'HtmlText';

  static propTypes = {
    text: PropTypes.string,
    component: PropTypes.node,
    parentName: PropTypes.string,
  };

  static defaultProps = {
    text: '',
    component: null,
    parentName: '',
  };
  render() {
    return (<Text
      style={getTextStyle(this.props.parentName)}
    >
      {this.props.text}
      <Text>{this.props.component}</Text>
    </Text>);
  }
}
export default HtmlText;
