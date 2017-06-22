import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Label from '../../components/Label';
import Helper from '../../utils/helper';

class CopyrightView extends Component {
  static componentName = 'CopyrightView';

  render() {
    const bsdProjects = [{
      name: 'React Native',
      link: 'https://github.com/facebook/react-native',
    }];

    const mitProjects = [
      {
        name: 'React Native Animatable',
        link: 'https://github.com/oblador/react-native-animatable',
      },
      {
        name: 'React Native Elements',
        link: 'https://github.com/react-native-training/react-native-elements',
      },
      {
        name: 'React Native Collapsible',
        link: 'https://github.com/oblador/react-native-collapsible',
      },
      {
        name: 'React Native Device Info',
        link: 'https://github.com/rebeccahughes/react-native-device-info',
      },
      {
        name: 'React Native Fetch Blob',
        link: 'https://github.com/wkh237/react-native-fetch-blob',
      },
      {
        name: 'React Native Fetch FS',
        link: 'https://github.com/itinance/react-native-fs',
      },
      {
        name: 'React Native Google Analytics Bridge',
        link: 'https://github.com/idehub/react-native-google-analytics-bridge',
      },
      {
        name: 'React Native HTMLView',
        link: 'https://github.com/jsdf/react-native-htmlview',
      },
      {
        name: 'React Native Infinite Scroll View',
        link: 'https://github.com/expo/react-native-infinite-scroll-view',
      },
      {
        name: 'Looped carousel for React Native',
        link: 'https://github.com/appintheair/react-native-looped-carousel',
      },
      {
        name: 'React Native Modalbox',
        link: 'https://github.com/maxs15/react-native-modalbox',
      },
      {
        name: 'React Native Progress',
        link: 'https://github.com/oblador/react-native-progress',
      },
    ];

    return (
      <ScrollView>
        <Label text="MIT" />
        <List>
          {mitProjects.map(project =>
            <ListItem
              key={project.link}
              title={project.name}
              onPress={() => { Helper.openLink(project.link); }}
            />,
          )}
        </List>
        <Label text="BSD" />
        <List>
          {bsdProjects.map(project =>
            <ListItem
              key={project.link}
              title={project.name}
              onPress={() => { Helper.openLink(project.link); }}
            />,
            )}
        </List>
      </ScrollView>
    );
  }
}

export default CopyrightView;
