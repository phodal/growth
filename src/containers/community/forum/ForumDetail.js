/* eslint-disable no-undef,consistent-return,no-unused-vars,no-control-regex */
import React, { Component, PropTypes } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import HTMLView from 'react-native-htmlview';
import * as shortid from 'shortid';

const filter = require('lodash.filter');

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

    const discussions = filter(data.included, { type: 'posts' });
    let discussComponent = <View />;

    if (discussions) {
      discussComponent = (<View style={{ paddingTop: 15 }}>
        {
          discussions.map((discussion, index) => {
            if (discussion.attributes.number !== 1) {
              return (<View key={shortid.generate()} style={{ paddingTop: 5 }}>
                <HTMLView
                  value={discussion.attributes.contentHtml}
                  style={{ padding: 5, borderBottomWidth: 1, backgroundColor: '#fff', borderBottomColor: '#ddd' }}
                />
              </View>);
            }

            return null;
          })
        }
      </View>);
    }

    return (
      <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ paddingTop: 15, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
          <Text style={{ textAlign: 'center' }}>{ attributes.title }</Text>
        </View>
        <HTMLView
          value={removeTailingWhiteSpaces(post.attributes.contentHtml)}
          addLineBreaks={false}
          style={{ padding: 10, borderBottomWidth: 1, backgroundColor: '#fff', borderBottomColor: '#ddd' }}
        />
        {discussComponent}
      </ScrollView>
    );
  }
}

export default ForumDetail;
