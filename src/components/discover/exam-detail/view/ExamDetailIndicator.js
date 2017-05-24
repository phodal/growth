import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import AppStyle from '../../../../theme/styles';
import ICON_LIST, { iconSize, iconType, defaultIcon } from '../../../../../assets/data/QUIZS_ICON';

class ExamDetailBack extends Component {
  static componentName = 'ExamDetailBack';

  static propTypes = {
    index: PropTypes.number.isRequired,
  };

  static defaultProps = {
    index: 0,
  };

  render() {
    const icons = Array.from(new Array(9))
      .map((val, i) =>
        (<Icon
          name={this.props.index % 9 === i ? ICON_LIST[i] : defaultIcon}
          size={iconSize}
          type={iconType}
          key={'key'.concat(i)}
        />));
    return (
      <View style={AppStyle.examDetailIndicatorStyle}>
        {icons}
      </View>
    );
  }
}
export default ExamDetailBack;
