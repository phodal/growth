import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import ExamDetailBack from '../../../components/discover/exam-detail/view/ExamDetailBack';
import Content from '../../../components/discover/exam-detail/view/ExamDetailContent';

function getColor(index) {
  switch (index % 9) {
    case 0:
      return '#3498db';
    case 1:
      return '#1abc9c';
    case 2:
      return '#9b59b6';
    case 3:
      return '#40E0D0';
    case 4:
      return '#3498db';
    case 5:
      return '#34495e';
    case 6:
      return '#95a5a6';
    case 7:
      return '#2ecc71';
    case 8:
      return '#e67e22';
    case 9:
      return '#e74c3c';
    default:
      return '';
  }
}

class ExamDetail extends Component {
  static componentName = 'ExamDetail';

  static propTypes = {
    quizs: PropTypes.arrayOf(
      PropTypes.string,
    ),
  };

  static defaultProps = {
    quizs: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 30, backgroundColor: getColor(this.state.index) }}>
        <ExamDetailBack />
        <Content
          quizs={this.props.quizs}
          onIndexChangeListener={position => this.setState({ index: position })}
        />
      </View>
    );
  }
}
export default ExamDetail;
