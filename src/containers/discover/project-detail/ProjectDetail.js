import React, { Component, PropTypes } from 'react';
import { ScrollView, Text, View, Clipboard, TouchableHighlight, LayoutAnimation } from 'react-native';
import AppStyle from '../../../theme/styles';
import AppSize from '../../../theme/sizes';
import Helper from '../../../utils/helper';

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
        .map((val, index) => (
          this.props.projects[index]
        )),
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
      timer: setTimeout(() => { this.setState({ hintTextMarginTop: -40 }); }, 3000) });
  }


  render() {
    const rows = this.state.rowData.map(val => (
      <TouchableHighlight
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 10,
          backgroundColor: 'white',
          borderRadius: 5 }}
        key={val.name}
        onPress={() => { this.onCopyLink(val.link); }}
        underlayColor={'transparent'}
      >
        <View>
          <View
            style={{
              marginLeft: 15,
              marginRight: 15,
              height: 40,
              flex: 1,
              justifyContent: 'center' }}
          >
            <Text>{val.name}</Text>
          </View>
          <Text style={AppStyle.line} />
          <Text style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}>{val.desc}</Text>
          <Text style={AppStyle.line} />
          <Text
            style={{
              marginLeft: 15,
              marginRight: 15,
              lineHeight: 20 }}
            onPress={() => { Helper.openLink(val.link); }}
          >{val.link}</Text>
        </View>
      </TouchableHighlight>
    ));
    return (
      <ScrollView style={{ marginTop: AppSize.navbarHeight, backgroundColor: '#E9EBEE' }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            marginTop: this.state.hintTextMarginTop,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        >
          <Text>链接已复制</Text>
        </View>
        {rows}
      </ScrollView>
    );
  }
}
export default RoadmapDetail;
