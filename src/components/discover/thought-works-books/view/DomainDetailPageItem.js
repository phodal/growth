import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import AppStyle from '../../../../theme/styles';
import Line from '../../../Line';

class DomainDetailPageItem extends Component {
  static componentName = 'DomainDetailPageItem';

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
      <View style={{ backgroundColor: 'white' }} key={val.concat(index)}>
        <View style={AppStyle.projectListContentStyle}>
          <Text>{val}</Text>
        </View>
        <Line />
      </View>
     ));
    return (
      <View>
        <View style={AppStyle.titleVerticalCenterColorGrayStyle}>
          <Text style={{ color: '#999' }}>{this.state.name}</Text>
        </View>
        {rows}
      </View>
    );
  }
}
export default DomainDetailPageItem;

