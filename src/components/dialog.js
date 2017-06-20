import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Modal } from 'react-native';
import Spinkit from 'react-native-spinkit';
import AppStyle from '../theme/styles';
import TIPS from '../constants/TIPS';

function hide() {
  setTimeout(() =>
    this.setState({ visible: false }),
    500);
}

class Dialog extends Component {
  static componentName = 'Dialog';

  static propTypes = {
    show: PropTypes.bool,
    content: PropTypes.string,
  };

  static defaultProps = {
    show: false,
    content: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      timer: setTimeout(() =>
        this.hide(),
        7000),
      visible: this.props.show,
    };
    this.hide = hide.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.show) {
      clearTimeout(this.state.timer);
      this.hide();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  render() {
    return (
      <Modal
        visible={this.state.visible}
        animationType={'fade'}
        transparent
        onRequestClose={() => {}}
      >
        <View>
          <View style={AppStyle.dialogStyle}>
            <View style={AppStyle.dialogStyleContent}>
              <Spinkit isVisible={this.state.visible} size={18} type={'FadingCircleAlt'} color={'#03a9f4'} />
              <Text style={AppStyle.dialogTextStyle}>
                <Text style={AppStyle.dialogTextTipsStyle}>Tips : </Text>
                {this.props.content ? this.props.content : TIPS[Math.ceil(Math.random() * 6) % 6]}
              </Text>
            </View>
          </View>
        </View>
      </Modal>);
  }

}
export default Dialog;
