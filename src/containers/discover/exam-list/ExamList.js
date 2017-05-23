import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';

class ExamList extends Component {
  static componentName = 'ExamList';
  render = () => (
    <ScrollView style={AppStyle.detailBasisStyle}>ExamList</ScrollView>
  );
}
export default ExamList;
