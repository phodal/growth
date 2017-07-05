import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import AppStyle from '../../../theme/styles';
import Api from '../../../utils/api';
import Dialog from '../../../components/dialog';
import Launch from '../../../components/discover/Launch';

class ToolBoxList extends Component {
  static componentName = 'ToolBoxList';

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
    Api.get(Api.TOOLBOX_LIST)
      .then(response => this.setState({
        loading: false,
        rowData: Array.from(new Array(response.data.content.length))
          .map((val, index) =>
            response.data.content[index]) }));
  }

  keyExtractor = (item, index) => `key${index}`;

  renderList = ({ item, index }) => (
    <ListItem
      title={item.title}
      key={'key'.concat(index)}
      onPress={() => { Launch.toolBoxDetail(item.path); }}
    />
  );

  render() {
    return (<ScrollView style={AppStyle.detailBasisStyle}>
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
    </ScrollView>);
  }
}
export default ToolBoxList;
