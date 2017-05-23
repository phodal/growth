import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import Api from '../../../utils/api';
import AppStyle from '../../../theme/styles';
import Launch from '../Launch';
import Dialog from '../../../components/dialog';
import SimpleListItem from '../SimpleListItem';

class RoadmapList extends Component {
  static componentName = 'RoadmapList';

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
    Api.get(Api.ROADMAP_LIST)
      .then(response => (
        this.setState({
          loading: false,
          rowData: Array.from(new Array(response.data.content.length))
            .map((val, index) => (
            response.data.content[index])) })));
  }

  render() {
    const rows = this.state.rowData.map(data => (
      <SimpleListItem
        key={data.name}
        text={data.name}
        click={() => { Launch.roadmapDetail(data.name.concat('学习路线'), data.timeline); }}
      />
    ));

    return (
      <ScrollView style={AppStyle.detailBasisStyle} >
        <Dialog show={this.state.loading} content={this.props.dialogContent} />
        {
          !this.state.loading
            ? rows
            : null
          }
      </ScrollView>
    );
  }
}
export default RoadmapList;

