import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import AppColors from '../theme/colors';

class TabIcon extends React.Component {
  componentName = 'TabIcon';
  render() {
    return (
      <View>
        <Icon name={this.props.iconName} type={this.props.iconType} color={this.props.selected ? AppColors.brand.primary : '#767676'} />
        <Text style={{ color: this.props.selected ? AppColors.brand.primary : '#767676' }}>{this.props.title}</Text>
      </View>
    );
  }
}


TabIcon.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired };

TabIcon.defaultProps = { title: 'Home', selected: false, iconName: 'md-home', iconType: 'ionicon' };

export default TabIcon;
