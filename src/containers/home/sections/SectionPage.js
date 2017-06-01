import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import SECTIONS from '../../../constants/SECTIONS';
import SectionArticleTab from './SectionArticleTab';
import SectionGrowthTab from './SectionGrowthTab';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class SectionPage extends Component {
  static componentName = 'SectionPage';

  static propTypes = {
    sectionIndex: PropTypes.number.isRequired,
    subSectionIndex: PropTypes.number.isRequired,
  };

  state = {
    index: 0,
    sectionInfo: [],
    routes: [
      { key: '1', title: '文章' },
      { key: '2', title: '洞见' },
    ],
  };

  componentWillMount() {
    const sectionIndex = this.props.subSectionIndex;
    const sectionInfo = SECTIONS[this.props.sectionIndex].subSections[sectionIndex];

    this.setState({
      sectionInfo,
    });
  }

  handleChangeTab = index => this.setState({ index });

  renderHeader = props => <TabBar {...props} />;

  renderScene = SceneMap({
    1: () => <SectionArticleTab sectionInfo={this.state.sectionInfo} />,
    2: () => <SectionGrowthTab sectionInfo={this.state.sectionInfo} />,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onRequestChangeTab={this.handleChangeTab}
      />
    );
  }
}

export default SectionPage;
