import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import TimeLine from '../TimeLineView';
import AppSize from '../../../theme/sizes';

const parse = (value, re) => (value.replace(re, '\r\n'));

class RoadmapDetail extends Component {
  static componentName = 'RoadmapDetail';

  static propTypes = {
    timeline: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        section: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    timeline: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      rowData: Array.from(
        new Array(this.props.timeline.length))
        .map((val, index) => (
          this.props.timeline[index]
        )),
    };
  }

  render() {
    const rows = this.state.rowData.map((val, index) => (
      <TimeLine
        title={val.section}
        content={parse(parse(val.description, /<br\s*\/?> /gi), /<br\s*\/?>/gi)}
        itemIndex={index}
        key={val.section}
      />
    ));
    return (
      <ScrollView style={{ marginTop: AppSize.navbarHeight, backgroundColor: '#E9EBEE' }}>
        {rows}
      </ScrollView>
    );
  }
}
export default RoadmapDetail;
