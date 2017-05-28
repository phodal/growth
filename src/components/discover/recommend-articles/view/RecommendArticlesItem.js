import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import AppStyle from '../../../../theme/styles';
import Line from '../../../Line';

class RecommendArticlesItem extends Component {
  static componentName = 'RecommendArticlesItem';

  static propTypes = {
    content:
        PropTypes.shape(
          PropTypes.string.isRequired,
          PropTypes.arrayOf(PropTypes.shape(
            PropTypes.string.isRequired,
            ),
          )),
  };

  static defaultProps = {
    content: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.content.name,
      rowData: Array.from(new Array(this.props.content.books.length))
        .map((val, index) => (this.props.content.books[index])) };
  }

  render() {
    const rows = this.state.rowData.map((val, index) => (
      <TouchableHighlight onPress={() => console.log('jupm book detail')} key={val.title.concat(index)}>
        <View style={{ backgroundColor: 'white' }}>
          <View style={AppStyle.projectListContentStyle}>
            <Text>{val.title}</Text>
          </View>
          <Line />
        </View>
      </TouchableHighlight>
     ));
    return (
      <View>
        <View style={AppStyle.projectListTitleStyle}>
          <Text style={{ color: '#999' }}>{this.state.name}</Text>
        </View>
        {rows}
      </View>
    );
  }
}
export default RecommendArticlesItem;

