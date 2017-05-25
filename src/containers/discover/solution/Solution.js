import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import ContentIten from '../../../components/discover/solution/view/SolutionContentItem';
import SOLUTIONS from '../../../constants/SOLUTIONS';

class Solution extends Component {
  static componentName = 'Solution';

  constructor(props) {
    super(props);
    this.state = {
      rowData: SOLUTIONS,
    };
  }

  render() {
    const rows = this.state.rowData
      .map((val, index) => (
        <ContentIten
          name={val.name}
          description={val.description}
          stack={val.stacks}
          key={val.name.concat(index)}
        />
      ));
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        {rows}
      </ScrollView>
    );
  }
}
export default Solution;
