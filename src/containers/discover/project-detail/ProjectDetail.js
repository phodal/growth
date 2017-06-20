import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, Clipboard, TouchableHighlight, LayoutAnimation } from 'react-native';
import AppStyle from '../../../theme/styles';
import Helper from '../../../utils/helper';
import Line from '../../../components/Line';

class RoadmapDetail extends Component {
  static componentName = 'RoadmapDetail';

  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape(
        PropTypes.string.isRequired,
        PropTypes.string.isRequired,
        PropTypes.string.isRequired,
      ),
    ),
  };

  static defaultProps = {
    projects: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      rowData: Array.from(
        new Array(this.props.projects.length))
        .map((val, index) => (this.props.projects[index])),
      hintTextMarginTop: -40,
      timer: {},
    };
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  onCopyLink(link) {
    Clipboard.setString(link);
    // Animate the update
    LayoutAnimation.spring();
    clearTimeout(this.state.timer);
    this.setState({
      hintTextMarginTop: 0,
      timer: setTimeout(
        () => this.setState({ hintTextMarginTop: -40 }),
        3000),
    });
  }

  render() {
    const rows = this.state.rowData.map(val => (
      <TouchableHighlight
        style={AppStyle.projectDetailItemStyle}
        key={val.name}
        onPress={() => { this.onCopyLink(val.link); }}
        underlayColor={'transparent'}
      >
        <View>
          <View style={AppStyle.projectDetailItemTitleStyle}>
            <Text>{val.name}</Text>
          </View>
          <Line />
          <Text style={AppStyle.projectDetailItemDescStyle}>{val.desc}</Text>
          <Line />
          <Text
            style={AppStyle.projectDetailItemLinkStyle}
            onPress={() => { Helper.openLink(val.link); }}
          >{val.link}</Text>
        </View>
      </TouchableHighlight>
    ));
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        <View
          marginTop={this.state.hintTextMarginTop}
          style={AppStyle.projectDetailHintStyle}
        >
          <Text>链接已复制</Text>
        </View>
        {rows}
      </ScrollView>
    );
  }
}
export default RoadmapDetail;
