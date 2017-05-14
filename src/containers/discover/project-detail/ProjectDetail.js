import React, { Component, PropTypes } from 'react';
import { ScrollView, Text, View } from 'react-native';
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
    };
  }

  render() {
    const rows = this.state.rowData.map(val => (
      <View style={{ marginLeft: 15, marginRight: 15, marginTop: 10, backgroundColor: 'white', borderRadius: 5 }} key={val.name} >
        <Text
          style={{
            marginLeft: 15, marginRight: 15, height: 40, lineHeight: 40, fontSize: 16 }}
        >{val.name}</Text>
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
    ));
    return (
      <ScrollView style={{ marginTop: AppSize.navbarHeight }}>
        {rows}
      </ScrollView>
    );
  }
}
export default RoadmapDetail;
