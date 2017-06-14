/* eslint-disable no-undef,consistent-return,no-unused-vars */
import React, { Component, PropTypes } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';

import HTMLView from 'react-native-htmlview';


function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.type === 'text') {
    console.log(node.data);
  }
}

function removeTailingWhiteSpaces(text) {
  return text.replace(new RegExp('<p>', 'g'), '<span>')
    .replace(new RegExp('</p>', 'g'), '</span>');
}

class ForumDetail extends Component {
  static componentName = 'ForumDetail';

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: this.props.id,
      data: [],
    };
  }

  componentDidMount() {
    fetch(`https://forum.growth.ren/api/discussions/${this.state.id}`, {
      method: 'get',
      dataType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then((data) => {
      this.setState({
        loading: false,
        data,
      });
    });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (<View
        style={{ marginTop: 20 }}
      >
        <ActivityIndicator
          animating
          size={'large'}
          color={'#000'}
        />
      </View>);
    }

    const data = this.state.data;
    const attributes = data.data.attributes;
    const post = data.included[0];

    return (
      <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
        <Text>{ attributes.title } </Text>
        <HTMLView
          value={removeTailingWhiteSpaces(post.attributes.contentHtml)}
          addLineBreaks={false}
          renderNode={renderNode}
        />
      </ScrollView>
    );
  }
}

export default ForumDetail;
