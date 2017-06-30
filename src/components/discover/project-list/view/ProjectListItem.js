import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight, FlatList } from 'react-native';
import AppStyle from '../../../../theme/styles';
import Launch from '../../Launch';
import Line from '../../../../components/Line';
import { List, ListItem } from 'react-native-elements';

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

  keyExtractor = (item, index) => `key${index}`;

  renderList = ({ item }) => (
    <ListItem
      title={item.name}
      key={item.name}
      onPress={() => { Launch.projectDetail(item.name.concat('练手项目'), item.projects); }}
    />
  );

  render() {
    return (
      <View>
        <View style={AppStyle.titleVerticalCenterColorGrayStyle}>
          <Text>{this.state.name}</Text>
        </View>
        <Line />
        <List containerStyle={{ borderTopWidth: 0, marginTop: 0 }}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.rowData}
            renderItem={this.renderList}
          />
        </List>
      </View>);
  }
}
export default ProjectListItem;
