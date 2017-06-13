/* eslint-disable no-undef */
import React, { Component, PropTypes } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

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
      <View>
        <Text>{ attributes.title } </Text>
        <Text>{ post.attributes.content } </Text>
      </View>
    );
  }
}

export default ForumDetail;
