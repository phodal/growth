import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

class SkillDetailView extends React.PureComponent {
  static componentName = 'SkillDetailView';

  static propTypes = {
    skillId: PropTypes.number,
  };

  static defaultProps = {
    skillId: null,
  };

  render() {
    return (
      <View>
        <Text>{this.props.skillId}</Text>
      </View>
    );
  }
}

export default SkillDetailView;
