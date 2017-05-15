import React, { Component, PropTypes } from 'react';
import { View, Text, Dimensions, Modal } from 'react-native';
import Spinkit from 'react-native-spinkit';

const tips = [
  '不要复制粘贴代码',
  '没有人喜欢用那些超级长的方法',
  '编码之前想一想',
  '抽时间对代码进行重构',
  '编码之前要想一想',
  '不要在没有测试的情况下重构'];


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
      loadingHeight: Dimensions.get('window').height,
      modalVisible: true,
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
          <View style={{ height: this.state.loadingHeight, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,.1)' }}>
            <View style={{ borderRadius: 2, flexDirection: 'row', minWidth: 180, backgroundColor: 'white', paddingLeft: 15, paddingRight: 15, paddingTop: 20, paddingBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Spinkit isVisible={this.state.loading} size={18} type={'FadingCircleAlt'} color={'#03a9f4'} />
              <Text style={{ marginLeft: 10, color: '#999', minWidth: 150, maxWidth: 210 }}><Text style={{ fontWeight: 'bold' }}>Tips : </Text>{ tips[Math.ceil(Math.random() * 6) % 6]}</Text>
            </View>
          </View>
        </View>
      </Modal>);
  }
}
export default Dialog;
