import React, { Component, PropTypes } from 'react';
import Api from '../../../utils/api';
import HtmlView, { NET } from '../../../components/HtmlView';

class ToolBoxDetail extends Component {
  static componentName = 'ToolBoxDetail';

  static propTypes = {
    url: PropTypes.string.isRequired,
    dialogContent: PropTypes.string,
  };

  static defaultProps = {
    url: '',
    dialogContent: '',
  };

  render() {
    return (
      <HtmlView
        type={NET}
        url={Api.TOOLBOX_DETAIL.concat(this.props.url)}
        dialogContent={this.props.dialogContent}
      />);
  }
}
export default ToolBoxDetail;
