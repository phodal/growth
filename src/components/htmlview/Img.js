import React, { Component, PropTypes } from 'react';
import { Image, Dimensions } from 'react-native';

const maxWidth = Dimensions.get('window').width - 30;

class Img extends Component {
  static componentName = 'Img';

  static propTypes = {
    uri: PropTypes.string.isRequired,
  };

  static defaultProps = {
    uri: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      imgWidth: maxWidth,
      imgHeight: 100,
      notdestroy: true,
    };
  }

  componentDidMount() {
    Image.getSize(this.props.uri, (width, height) => {
      if (this.state.notdestroy) {
        this.setState({
          imgHeight: (maxWidth / width) * height,
        });
      }
    });
  }

  componentWillUnmount() {
    this.state.notdestroy = false;
  }
  render() {
    return (
      <Image
        source={{ uri: this.props.uri }}
        style={{ height: this.state.imgHeight, width: this.state.imgWidth }}
      />
    );
  }
}
export default Img;
