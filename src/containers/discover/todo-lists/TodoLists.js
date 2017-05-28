import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import TODO_LISTS_ITEM from '../../../constants/TODO_LISTS_ITEM';
import SimpleListItem from '../../../components/discover/view/SimpleListItem';

class TodoLists extends Component {
  static componentName = 'TodoLists';

  constructor(props) {
    super(props);
    this.state = {
      data: TODO_LISTS_ITEM,
    };
  }
  render() {
    const rows = this.state.data.map((val, index) => (
      <SimpleListItem text={val.name} key={val.name.concat(index)} />));
    return <ScrollView style={AppStyle.detailBasisStyle}>{rows}</ScrollView>;
  }
}
export default TodoLists;
