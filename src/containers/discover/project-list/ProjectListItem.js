import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import AppStyle from '../../../theme/styles';
import Launch from '../Launch';

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
      rowData: Array.from(new Array(this.props.content.subdomains.length)).map(
        (val, index) => (this.props.content.subdomains[index])) };
  }


  render() {
    const rows = this.state.rowData.map(val => (
      <TouchableHighlight onPress={() => { Launch.projectDetail(val.name.concat('练手项目'), val.projects); }} underlayColor="rgba(250, 250, 250, .9)" key={val.name} >
        <View style={{ marginLeft: 15 }}>
          <Text style={{ flex: 1, height: 40, lineHeight: 40 }} >{val.name}</Text>
          <Text style={AppStyle.line} />
        </View>
      </TouchableHighlight>));
    return (
      <View>
        <View>
          <Text style={{ paddingLeft: 15, backgroundColor: 'rgb(245,245,245)', flex: 1, height: 40, lineHeight: 40 }}>{this.state.name}</Text>
          <Text style={AppStyle.line} />
        </View>
        {rows}
      </View>);
  }
}
export default ProjectListItem;
