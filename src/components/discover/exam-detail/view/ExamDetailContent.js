import React, { Component, PropTypes } from 'react';
import { View, Text, PanResponder } from 'react-native';
import Indicator from './ExamDetailIndicator';
import AppStyle from '../../../../theme/styles';

let startX;
let endX;
let pressPosition;
let leftslide;
let diff;

class ExamDetailContent extends Component {
  static componentName = 'ExamDetailContent';

  static propTypes = {
    quizs: PropTypes.arrayOf(
      PropTypes.string,
    ),
    onIndexChangeListener: PropTypes.func,
    test: PropTypes.bool,
  };

  static defaultProps = {
    quizs: [],
    onIndexChangeListener: () => {},
    test: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      randomIndex: this.props.test
        ? 0
        : Math.floor(Math.random() * (this.props.quizs.length - 9)),
      text: this.props.quizs[
        this.props.test
          ? 0
          : Math.floor(Math.random() * (this.props.quizs.length - 9))],
      index: 0,
    };
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: () => true,
      onPanResponderStart: (e, gestureState) => {
        startX = gestureState.moveX;
        pressPosition = gestureState.x0;
        return true;
      },
      onPanResponderEnd: (e, gestureState) => {
        endX = gestureState.moveX;
        this.change();
        return true;
      },
    });
  }

  change() {
    if (endX === 0) return;
    leftslide = (pressPosition - endX) > 0;
    diff = endX - startX;
    if (!leftslide) {
      diff = -diff;
    }
    if (diff > 30 && this.state.index < 8) {
      this.state.index += 1;
    } else if (diff < -30 && this.state.index > 0) {
      this.state.index -= 1;
    }
    this.setState({
      text: this.props.quizs[this.state.randomIndex + this.state.index],
    });
    this.props.onIndexChangeListener(this.state.index);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          {...this.panResponder.panHandlers}
          style={AppStyle.examDetailContentStyle}
        >
          <Text>{this.state.text}</Text>
        </View>
        <Indicator index={this.state.index} />
      </View>
    );
  }
}
export default ExamDetailContent;
