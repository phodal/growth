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
    const movePx = 0;
    const minCount = 0;
    const maxCount = 8;
    const minSlideValue = 30;
    if (endX === movePx) return;
    leftslide = (pressPosition - endX) > movePx;
    diff = endX - startX;
    if (!leftslide) {
      diff = -diff;
    }
    if (diff > minSlideValue && this.state.index < maxCount) {
      this.state.index += 1;
    } else if (diff < -minSlideValue && this.state.index > minCount) {
      this.state.index -= 1;
    }
    this.setState({
      text: this.props.quizs[this.state.randomIndex + this.state.index],
    });
    this.props.onIndexChangeListener(this.state.index);
  }

  render() {
    return (
      <View
        {...this.panResponder.panHandlers}
        style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0)' }}
      >
        <View
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
