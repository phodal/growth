import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements';


const styles = StyleSheet.create({
  tabbar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
});

class AlgorithmDetailView extends Component {
  static componentName = 'AlgorithmDetailView';

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'detail',
    };
  }

  changeTab(selectedTab) {
    this.setState({ selectedTab });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text style={{ padding: 20, textAlign: 'center' }}> 这个功能在 TODO List 里，如果你需要请点个赞</Text>

        <Tabs>
          <Tab
            titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
            selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
            selected={selectedTab === 'detail'}
            title={selectedTab === 'detail' ? 'DETAIL' : null}
            renderIcon={() => <Icon containerStyle={styles.tabbar} color={'#5e6977'} name="device-hub" size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name="device-hub" size={30} />}
            onPress={() => this.changeTab('detail')}
          >
            <ScrollView>
              <Text>DETAIL</Text>
            </ScrollView>
          </Tab>
          <Tab
            titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
            selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
            selected={selectedTab === 'execution'}
            title={selectedTab === 'execution' ? 'EXECUTION' : null}
            renderIcon={() => <Icon containerStyle={styles.tabbar} color={'#5e6977'} name="assessment" size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name="assessment" size={30} />}
            onPress={() => this.changeTab('execution')}
          >
            <ScrollView>
              <Text>DETAIL</Text>
            </ScrollView>
          </Tab>
          <Tab
            titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
            selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
            selected={selectedTab === 'code'}
            title={selectedTab === 'code' ? 'CODE' : null}
            renderIcon={() => <Icon containerStyle={styles.tabbar} color={'#5e6977'} name="code" size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name="code" size={30} />}
            onPress={() => this.changeTab('code')}
          >
            <ScrollView>
              <Text>CODE</Text>
            </ScrollView>
          </Tab>
        </Tabs>

      </View>
    );
  }
}

export default AlgorithmDetailView;
