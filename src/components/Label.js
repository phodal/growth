import React from 'react';
import { Text, View } from 'react-native';

const Label = props => (
  <View style={{ paddingLeft: 20, marginTop: 12, marginBottom: -6 }}>
    <Text style={{ fontSize: 14 }}>
      {props.text}
    </Text>
  </View>
);

Label.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Label;
