import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import ForumContainer from './forum/ForumContainers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />;

class Community extends PureComponent {
  static componentName = 'Community';

  state = {
    index: 0,
    routes: [
      { key: '1', title: '论坛' },
      { key: '2', title: '动态' },
    ],
  };

  handleChangeTab = index => this.setState({ index });

  renderHeader = props => <TabBar {...props} />;

  renderElement = data =>
    <View>
      <Text>{data.attributes.title}</Text>
    </View>;

  renderScene = SceneMap({
    1: () => <ForumContainer url={'https://forum.growth.ren/api/discussions'} element={data => this.renderElement(data)} />,
    2: SecondRoute,
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

export default Community;
