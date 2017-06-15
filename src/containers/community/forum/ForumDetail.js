/* eslint-disable no-undef,consistent-return,no-unused-vars,no-control-regex */
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
    .replace(new RegExp('</p>', 'g'), '</span>')
    .replace(new RegExp('(\n){2,}', 'gim'), '<br/>');
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
      <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
        <View style={{ paddingTop: 15, paddingBottom: 15, borderBottomWidth: 3, borderBottomColor: '#eee' }}>
          <Text style={{ textAlign: 'center' }}>{ attributes.title }</Text>
        </View>
        <HTMLView
          value={removeTailingWhiteSpaces(post.attributes.contentHtml)}
          addLineBreaks={false}
          renderNode={renderNode}
          style={{ paddingTop: 5, paddingBottom: 15, borderBottomWidth: 2, borderBottomColor: '#eee' }}
        />
      </ScrollView>
    );
  }
}

export default ForumDetail;
