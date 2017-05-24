import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import SimpleListItem from '../../../components/discover/view/SimpleListItem';
import Launch from '../../../components/discover/Launch';
import QUIZS from '../../../constants/QUIZS';
import EXAM_LIST from '../../../constants/EXAM_LIST';

function swtichQuiz(name) {
  switch (name) {
    case 'HTML':
      return QUIZS.html;
    case 'CSS':
      return QUIZS.css;
    case 'JavaScript':
      return QUIZS.javascript;
    case '前端':
      return QUIZS.fe;
    case 'Node.js':
      return QUIZS.nodejs;
    default:
      return [];
  }
}

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
          <SimpleListItem
            text={val}
            click={() => (Launch.examDetail(swtichQuiz(val)))}
            key={val.concat(index)}
          />));

    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        {rows}
      </ScrollView>);
  }
}
export default ExamList;
