import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { ListItem, List } from 'react-native-elements';
import AppStyle from '../../../../theme/styles';

class RecommendSimpleItem extends Component {
  static componentName = 'RecommendSimpleItem';

  static propTypes = {
    content:
      PropTypes.shape(
        PropTypes.string.isRequired,
        PropTypes.arrayOf(PropTypes.shape(
          PropTypes.string.isRequired,
          ),
        )),
    launch: PropTypes.func,
    withoutHeading: PropTypes.bool,
  };

  static defaultProps = {
    content: {},
    launch: () => {},
    withoutHeading: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.content.name,
      withoutHeading: this.props.withoutHeading,
      rowData: Array.from(new Array(this.props.content.books.length))
        .map((val, index) => (this.props.content.books[index])) };
  }

  render() {
    const rows = this.state.rowData.map((val, index) => (
      <ListItem
        onPress={() => this.props.launch(val.slug)}
        key={val.title.concat(index)}
        title={val.title}
      />
    ));
    return (
      <View>
        {
          this.state.withoutHeading ? <View style={AppStyle.titleVerticalCenterColorGrayStyle}>
            <Text style={{ color: '#999' }}>{this.state.name}</Text>
          </View> : null
        }
        <List>
          {rows}
        </List>
      </View>
    );
  }
}
export default RecommendSimpleItem;

