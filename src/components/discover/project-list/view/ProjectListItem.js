import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import AppStyle from '../../../../theme/styles';
import Launch from '../../Launch';
import Line from '../../../../components/Line';

class ProjectListItem extends Component {
  static componentName = 'ProjectListItem';

  static propTypes = {
    content: PropTypes.shape(
      PropTypes.string.isRequired,
      PropTypes.arrayOf(
        PropTypes.shape(
          PropTypes.string.isRequired,
          PropTypes.arrayOf(PropTypes.shape(
            PropTypes.string.isRequired,
            PropTypes.string.isRequired,
            PropTypes.string.isRequired,
            ),
          )).isRequired),
    ),
  };

  static defaultProps = {
    content: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.content.name,
      rowData: Array.from(new Array(this.props.content.subdomains.length))
        .map((val, index) => (this.props.content.subdomains[index])) };
  }

  render() {
    const rows = this.state.rowData.map(val => (
      <TouchableHighlight
        onPress={() => { Launch.projectDetail(val.name.concat('练手项目'), val.projects); }}
        underlayColor="rgba(250, 250, 250, .9)"
        key={val.name}
        style={{ backgroundColor: 'white' }}
      >
        <View>
          <View style={AppStyle.projectListContentStyle}>
            <Text>{val.name}</Text>
          </View>
          <Line />
        </View>
      </TouchableHighlight>));
    return (
      <View>
        <View style={AppStyle.titleVerticalCenterColorGrayStyle}>
          <Text>{this.state.name}</Text>
        </View>
        <Line />
        {rows}
      </View>);
  }
}
export default ProjectListItem;
