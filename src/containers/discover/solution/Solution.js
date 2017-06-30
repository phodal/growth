import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';

import AppStyle from '../../../theme/styles';
import ContentIten from '../../../components/discover/solution/view/SolutionContentItem';
import SOLUTIONS from '../../../constants/SOLUTIONS';
import Launch from '../../../components/discover/Launch';

class Solution extends Component {
  static componentName = 'Solution';

  constructor(props) {
    super(props);
    this.state = {
      rowData: SOLUTIONS,
    };
  }

  keyExtractor = (item, index) => `key${index}`;

  renderList = ({ item, index }) => (
    <ContentIten
      name={item.name}
      description={item.description}
      stack={item.stacks}
      click={() => Launch.solutionDetail(item.slug)}
      key={item.name.concat(index)}
    />
  );

  render() {
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.rowData}
          renderItem={this.renderList}
        />
      </ScrollView>
    );
  }
}
export default Solution;
