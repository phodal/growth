import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import SECTIONS from '../../../constants/SECTIONS';

class SectionPage extends Component {
  static componentName = 'SectionPage';

  static propTypes = {
    sectionIndex: PropTypes.number.isRequired,
    subSectionIndex: PropTypes.number.isRequired,
  };

  render() {
    const sectionInfo = SECTIONS[this.props.sectionIndex].subSections[this.props.subSectionIndex];

    return (
      <View>
        <Text>{sectionInfo.title}</Text>
      </View>
    );
  }
}

export default SectionPage;
