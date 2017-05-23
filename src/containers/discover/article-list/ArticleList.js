import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import Api from '../../../utils/api';
import Dialog from '../../../components/dialog';
import SimpleListItem from '../SimpleListItem';
import Launch from '../Launch';

class ArticleList extends Component {
  static componentName = 'ArticleList';

  static propTypes = {
    dialogContent: PropTypes.string,
  };

  static defaultProps = {
    dialogContent: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rowData: [],
    };
  }

  componentDidMount() {
    Api.get(Api.ARTICLE_LIST)
      .then(response => this.setState({
        loading: false,
        rowData: Array.from(new Array(response.data.content.length))
          .map((val, index) => (response.data.content[index])) }));
  }

  render() {
    const rows = this.state.rowData.map((val, index) => (
      <SimpleListItem text={val.title} click={() => Launch.articleDetail(val.path)} key={'key'.concat(index)} />
    ));
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        <Dialog show={this.state.loading} content={this.props.dialogContent} />
        {rows}
      </ScrollView>);
  }
}
export default ArticleList;
