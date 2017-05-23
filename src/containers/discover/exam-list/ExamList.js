import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import SimpleListItem from '../../../components/discover/view/SimpleListItem';
import EXAM_LIST from '../../../../assets/data/EXAM_LIST';

class ExamList extends Component {
  static componentName = 'ExamList';

  constructor(props) {
    super(props);
    this.state = {
      rowData: EXAM_LIST,
    };
  }

  render() {
    const rows = this.state.rowData
        .map((val, index) => (
          <SimpleListItem text={val} key={val.concat(index)} />));

    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        {rows}
      </ScrollView>);
  }
}
export default ExamList;
