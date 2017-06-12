/* eslint-disable no-undef,react/forbid-prop-types */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import SectionPageHelper from '../../../utils/SectionPageHelper';

class SectionIntro extends Component {
  static componentName = 'SectionIntro';

  render() {
    const sectionInfo = SectionPageHelper.getSection();
    console.log(sectionInfo);

    return (
      <View>
        <Text>SectionIntro</Text>
      </View>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(SectionIntro);
