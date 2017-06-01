import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { List, ListItem } from 'react-native-elements';
import * as shortid from 'shortid';

import SECTIONS from '../../../constants/SECTIONS';

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
    1: () => {
      const articlesView = this.state.sectionInfo.articlesView;

      if (!articlesView) {
        return <Text />;
      }

      const articleViewComponent = articlesView[0].articles.map(article => (
        <ListItem
          key={shortid.generate()}
          title={article.title}
        />
      ));

      return (
        <View>
          <View style={{ backgroundColor: '#2d89ef' }}>
            <Text style={{ margin: 10, color: '#fff', textAlign: 'center' }}>了解优秀软件工程实践所需的信息</Text>
          </View>
          <List>
            {articleViewComponent}
          </List>
        </View>
      );
    },

    2: () => {
      const growthView = this.state.sectionInfo.growthView;
      const todoView = this.state.sectionInfo.todoView;

      const growthViewComponent = growthView ?
        (<List>
          {
            growthView[0].sections.map(section => (
              <ListItem
                key={shortid.generate()}
                title={section.title}
              />
            ))
          }
        </List>) : <View />;

      const todoViewComponent = todoView && todoView.length > 0 ? (
        <View>
          <Text style={{ marginTop: 15, textAlign: 'center' }}>TODO</Text>
          <List>
            {
              todoView.map(todo => (
                <ListItem
                  key={shortid.generate()}
                  title={todo.title}
                />
              ))
            }
          </List>
        </View>
        ) : <View />;

      return (
        <View>
          <View style={{ backgroundColor: '#2d89ef' }}>
            <Text style={{ margin: 10, color: '#fff', textAlign: 'center' }}>扩展自己的知识视野</Text>
          </View>
          { growthViewComponent }
          { todoViewComponent }
        </View>
      );
    },
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
