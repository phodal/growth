import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import Api from '../../../utils/api';
import AppStyle from '../../../theme/styles';
import SimpleListItem from '../../../components/discover/view/SimpleListItem';
import Dialog from '../../../components/dialog';
import Launch from '../../../components/discover/Launch';

class ChapterList extends Component {
  static componentName = 'ChapterList';

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
      visible: true,
      baseUrl: '',
      data: [],
    };
  }

  componentDidMount() {
    Api.get(this.props.url)
      .then(response => (
        this.setState({
          visible: false,
          baseUrl: response.data.source,
          data: Array.from(
            new Array(response.data.content.length))
            .map((val, index) => (response.data.content[index])) })));
  }

  render() {
    const rows = this.state.data
      .map((val, index) => (
        <SimpleListItem
          text={val.title}
          click={() => (
            Launch.chapterListArticle(
              this.state.baseUrl.concat(val.path), this.props.dialogContent))}
          key={val.title.concat(index)}
        />))
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        <Dialog show={this.state.visible} content={this.props.dialogContent} />
        {rows}
      </ScrollView>);
  }
}
export default ChapterList;
