import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import Api from '../../../utils/api';
import Dialog from '../../../components/dialog';
import HtmlView from '../../../components/htmlview/HtmlView';

const marked = require('marked');


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});
async function load(url, call) {
  Api.getToolBoxDetailData(url)
    .then(response => call(response.data))
    .catch(error => (error));
}

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

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      html: '',
    };
  }

  componentDidMount() {
    load(this.props.url, (json) => {
      this.setState({
        loading: false,
        html: marked(json),
      });
    });
  }

  render() {
    return (
      <ScrollView style={[AppStyle.detailBasisStyle, { backgroundColor: 'white' }]}>
        <Dialog show={this.state.loading} content={this.props.dialogContent} />
        <HtmlView value={this.state.html} />
      </ScrollView>
    );
  }
}

export default ToolBoxDetail;
