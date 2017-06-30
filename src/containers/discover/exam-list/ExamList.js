import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import AppStyle from '../../../theme/styles';
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


  keyExtractor = (item, index) => `key${index}`;

  renderList = ({ item, index }) => (
    <ListItem
      title={item}
      key={item.concat(index)}
      onPress={() => (Launch.examDetail(swtichQuiz(item)))}
    />
  );

  render() {
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        <List containerStyle={{ borderTopWidth: 0, marginTop: 0 }}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.rowData}
            renderItem={this.renderList}
          />
        </List>

      </ScrollView>);
  }
}
export default ExamList;
