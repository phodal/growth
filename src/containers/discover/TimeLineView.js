import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import Icon from '../../icon/GrowthFont';

import AppStyle from '../../theme/styles';

class TimeLine extends Component {
  static componentName = 'TimeLine';

  static propTypes = {
    selfStyle: View.propTypes.style,
    lineParentStyle: View.propTypes.style,
    lineIconStyle: Text.propTypes.style,
    topLineStyle: Text.propTypes.style,
    bottomLineStyle: Text.propTypes.style,
    cententParentStyle: Text.propTypes.style,
    title: PropTypes.string.isRequired,
    titleStyle: Text.propTypes.style,
    content: PropTypes.string.isRequired,
    contentStyle: Text.propTypes.style,
    hideTopLine: PropTypes.bool,
  };

  static defaultProps = {
    selfStyle: AppStyle.timeLine,
    lineParentStyle: AppStyle.timeLineParent,
    lineIconStyle: AppStyle.timeLineIcon,
    topLineStyle: AppStyle.timeLineTopLine,
    bottomLineStyle: AppStyle.timeLineBottomLine,
    cententParentStyle: AppStyle.timeLineCententParent,
    title: '',
    titleStyle: AppStyle.timeLineTitle,
    content: '',
    contentStyle: AppStyle.timeLineContent,
    hideTopLine: false,
  };

  render = () => (
    <View style={this.props.selfStyle}>
      <View style={this.props.lineParentStyle}>
        <Text style={[this.props.topLineStyle, this.props.hideTopLine ? { backgroundColor: 'transparent' } : {}]} />
        <Icon name={'circle'} size={20} style={this.props.lineIconStyle} />
        <Text style={this.props.bottomLineStyle} />
      </View>
      <View style={this.props.cententParentStyle}>
        <Text style={this.props.titleStyle}>{this.props.title}</Text>
        <Text style={this.props.contentStyle}>{this.props.content}</Text>
      </View>
    </View>
  );
}
export default TimeLine;
