import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Api from '../../../utils/api';
import AppStyle from '../../../theme/styles';
import Launch from '../../../components/discover/Launch';
import Dialog from '../../../components/dialog';

class RoadmapList extends Component {
  static componentName = 'RoadmapList';

  static propTypes = {
    dialogContent: PropTypes.string,
  };

  static defaultProps = {
    dialogContent: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rowData: [],
    };
  }

  componentDidMount() {
    Api.get(Api.ROADMAP_LIST)
      .then(response => (
        this.setState({
          loading: false,
          rowData: Array.from(new Array(response.data.content.length))
            .map((val, index) => (
            response.data.content[index])) })));
  }

  keyExtractor = (item, index) => `key${index}`;

  renderList = ({ item }) => (
    <ListItem
      title={item.name}
      key={item.name}
      onPress={() => { Launch.roadmapDetail(item.name.concat('学习路线'), item.timeline); }}
    />
  );

  render() {
    return (
      <ScrollView style={AppStyle.detailBasisStyle} >
        <Dialog show={this.state.loading} content={this.props.dialogContent} />
        {
          !this.state.loading
            ? <List containerStyle={{ borderTopWidth: 0, marginTop: 0 }}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.rowData}
                renderItem={this.renderList}
              />
            </List>
            : null
          }
      </ScrollView>
    );
  }
}
export default RoadmapList;

