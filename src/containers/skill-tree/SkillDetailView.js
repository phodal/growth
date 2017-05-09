import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import SKILL_TREE_DATA from './SKILL_TREE_DATA';

const filter = require('lodash.filter');

class SkillDetailView extends React.PureComponent {
  static componentName = 'SkillDetailView';

  static propTypes = {
    skillId: PropTypes.number,
  };

  static defaultProps = {
    skillId: null,
  };

  render() {
    const skillData = filter(SKILL_TREE_DATA, { id: this.props.skillId })[0];

    return (
      <View>
        <Text>{ skillData.title }</Text>
      </View>
    );
  }
}

export default SkillDetailView;
