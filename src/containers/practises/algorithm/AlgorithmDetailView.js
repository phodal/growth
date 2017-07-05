import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';


class AlgorithmDetailView extends Component {
  static componentName = 'AlgorithmDetailView';

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <View>
        <Text style={{ padding: 20, textAlign: 'center' }}> 这个功能在 TODO List 里，如果你需要请点个赞</Text>
      </View>
    );
  }
}

export default AlgorithmDetailView;
