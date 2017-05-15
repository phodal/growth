import React, { Component, PropTypes } from 'react';
import { View, Text, Modal } from 'react-native';
import Spinkit from 'react-native-spinkit';
import AppStyle from '../theme/styles';
import TIPS from '../../assets/TIPS';

class Dialog extends Component {
  static componentName = 'Dialog';

  static propTypes = {
    show: PropTypes.bool,
  };

  static defaultProps = {
    show: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      timer: setTimeout(() => (this.setState({ loading: false })), 7000),
      loading: this.props.show,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.show) clearTimeout(this.state.timer);
    this.setState({ loading: nextProps.show });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  render() {
    return (
      <Modal
        visible={this.state.loading}
        animationType={'fade'}
        transparent
        onRequestClose={() => {}}
      >
        <View>
          <View style={AppStyle.dialogStyle}>
            <View style={AppStyle.dialogStyleContent}>
              <Spinkit isVisible={this.state.loading} size={18} type={'FadingCircleAlt'} color={'#03a9f4'} />
              <Text style={AppStyle.dialogTextStyle}>
                <Text style={AppStyle.dialogTextTipsStyle}>Tips : </Text>
                {TIPS[Math.ceil(Math.random() * 6) % 6]}
              </Text>
            </View>
          </View>
        </View>
      </Modal>);
  }
}
export default Dialog;
