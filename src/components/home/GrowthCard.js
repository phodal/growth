/* eslint-disable global-require,import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Button, Card } from 'react-native-elements';

const GrowthCard = props => (
  <Card
    title={props.title}
    image={props.imageUrl}
  >
    <Text style={{ marginBottom: 10 }}>
      {props.intro}
    </Text>
    <Button
      icon={{ name: 'code' }}
      backgroundColor="#03A9F4"
      onPress={() => props.action()}
      buttonStyle={{ borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
      title="查看"
    />
  </Card>
);

GrowthCard.propTypes = {
  imageUrl: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default GrowthCard;
