import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import htmlParse from '../../lib/htmlParse';
import H from './H';
import Bloackquote from './Blockquote';
import P from './P';
import Ul from './Ul';
import Li from './Li';
import Img from './Img';
import A from './A';
import Pre from './Pre';
import Code from './Code';


function getKey(key) {
  return 'key'.concat(key);
}

function getTextStyle(node) {
  return (
  node.parent &&
  node.parent.parent &&
  /blockquote|code/.test(node.parent.parent.name))
    ? { color: '#4c4c4c' }
    : { color: '#000' };
}

function getTitleSize(node) {
  return 20 - (parseInt(node.name.substring(1, 2), 10) * 2);
}

function getmarginTop(node) {
  return node.parent.name === 'blockquote' ? 0 : 15;
}

const htmlToElement = (rawHtml, done) => {
  function domToElement(dom) {
    if (dom) {
      return dom.map((node, index) => {
        switch (node.name) {
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return (
              <H
                fontSize={getTitleSize(node)}
                component={domToElement(node.children)}
                key={getKey(index)}
              />);
          case 'blockquote':
            return (
              <Bloackquote
                component={domToElement(node.children)}
                key={getKey(index)}
              />);
          case 'p':
            return (
              <P
                margintop={getmarginTop(node)}
                component={domToElement(node.children)}
                childrenName={node.children[0].name}
                key={getKey(index)}
              />);
          case 'ul':
            return (
              <Ul
                component={domToElement(node.children)}
                key={getKey(index)}
              />);
          case 'li':
            return (
              <Li
                component={domToElement(node.children)}
                key={getKey(index)}
              />);
          case 'img':
            return (<Img
              uri={node.attribs.src}
              key={getKey(index)}
            />);
          case 'text':
            return (
              <Text
                style={getTextStyle(node)}
                key={getKey(index)}
              >{node.text}</Text>);
          case 'a':
            return (
              <A
                link={node.attribs.href}
                key={getKey(index)}
                component={domToElement(node.children)}
              />);
          case 'pre':
            return (
              <Pre
                component={domToElement(node.children)}
                key={getKey(index)}
              />);
          case 'code':
            return (
              <Code
                component={domToElement(node.children)}
                key={getKey(index)}
              />);
          default:
            return null;
        }
      });
    }
    return null;
  }

  htmlParse(rawHtml, (dom) => {
    done(null, domToElement(dom, null, 'block'));
  });
};

class HtmlView extends React.Component {

  static componentName = 'HtmlView';

  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      element: null,
    };
  }


  componentDidMount() {
    this.startHtmlRender();
  }
  componentWillReceiveProps(props) {
    this.props = props;
    this.startHtmlRender();
  }


  startHtmlRender() {
    if (!this.props.value) {
      return;
    }
    if (this.renderingHtml) {
      return;
    }

    this.renderingHtml = true;
    htmlToElement(this.props.value, (err, el) => {
      this.renderingHtml = false;
      this.setState({
        element: el,
      });
    });
  }

  render() {
    if (this.state.element) {
      return (
        <View style={{ flex: 1, paddingLeft: 15, paddingRight: 15, paddingBottom: 15, backgroundColor: 'white' }}>
          {this.state.element}
        </View>);
    }
    return <View />;
  }
}
export default HtmlView;
