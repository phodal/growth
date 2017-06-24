/* eslint-disable global-require,import/no-dynamic-require */
import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';

const GrowthImageCard = props => (
  <TouchableHighlight
    activeOpacity={1}
    onPress={() => props.action()}
  >
    <Image
      source={props.imageUrl}
      resizeMode="cover"
      borderRadius={6}
      style={{ marginLeft: 20, marginRight: 20, marginTop: 10, width: null, height: 120 }}
    >
      <View style={{ height: 40, opacity: 0.8, top: 80, backgroundColor: '#fff' }}>
        <Text style={{ textAlign: 'center', fontSize: 20, top: 8, color: '#000' }}> { props.text }</Text>
      </View>
    </Image>
  </TouchableHighlight>
);

GrowthImageCard.propTypes = {
  imageUrl: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default GrowthImageCard;
