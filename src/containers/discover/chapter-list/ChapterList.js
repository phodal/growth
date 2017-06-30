import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Api from '../../../utils/api';
import AppStyle from '../../../theme/styles';
import Dialog from '../../../components/dialog';
import Launch from '../../../components/discover/Launch';

class ChapterList extends Component {
  static componentName = 'ChapterList';

  static propTypes = {
    url: PropTypes.string.isRequired,
    dialogContent: PropTypes.string,
  };

  static defaultProps = {
    url: '',
    dialogContent: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      baseUrl: '',
      data: [],
    };
  }

  componentDidMount() {
    Api.get(this.props.url)
      .then(response => (
        this.setState({
          visible: false,
          baseUrl: response.data.source,
          data: Array.from(
            new Array(response.data.content.length))
            .map((val, index) => (response.data.content[index])) })));
  }

  keyExtractor = (item, index) => `key${index}`;

  renderList = ({ item, index }) => (
    <ListItem
      title={item.title}
      key={item.title.concat(index)}
      onPress={() => (
        Launch.chapterListArticle(this.state.baseUrl.concat(item.path), this.props.dialogContent,
        )
      )}
    />
  );

  render() {
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        <Dialog show={this.state.visible} content={this.props.dialogContent} />
        <List containerStyle={{ borderTopWidth: 0, marginTop: 0 }}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.data}
            renderItem={this.renderList}
          />
        </List>
      </ScrollView>);
  }
}
export default ChapterList;
