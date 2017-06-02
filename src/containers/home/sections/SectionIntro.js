/* eslint-disable no-undef,react/forbid-prop-types,react/require-default-props */
import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class SectionIntro extends Component {
  static componentName = 'ComingSoonView';
  static propTypes = {
// eslint-disable-next-line react/require-default-props
    routes: PropTypes.object,
  };

  render() {
    console.log(this.props.routes);

    return (
      <View>
        <Text>SectionIntro</Text>
      </View>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(SectionIntro);
