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
        name: 'React Native Router Flux',
        link: 'https://github.com/aksonov/react-native-router-flux',
      },
      {
        name: 'React Native Search Box',
        link: 'https://github.com/crabstudio/react-native-search-box',
      },
      {
        name: 'React Native Share',
        link: 'https://github.com/EstebanFuentealba/react-native-share',
      },
      {
        name: 'React Native Simple Toast',
        link: 'https://github.com/xgfe/react-native-simple-toast',
      },
      {
        name: 'React Native Spinkit',
        link: 'https://github.com/maxs15/react-native-spinkit',
      },
      {
        name: 'React Native Splash Screen',
        link: 'https://github.com/crazycodeboy/react-native-splash-screen',
      },
      {
        name: 'React Native Store Review',
        link: 'https://github.com/oblador/react-native-store-review',
      },
      {
        name: 'React Native Tab View',
        link: 'https://github.com/react-native-community/react-native-tab-view',
      },
      {
        name: 'React Native Timeago',
        link: 'https://github.com/TylerLH/react-native-timeago',
      },
      {
        name: 'React Native Vector Icons',
        link: 'https://github.com/oblador/react-native-vector-icons',
      },
      {
        name: 'React Native Zip Archive',
        link: 'https://github.com/mockingbot/react-native-zip-archive',
      },
      {
        name: 'React Redux',
        link: 'https://github.com/reactjs/react-redux',
      },
      {
        name: 'Redux',
        link: 'https://github.com/reactjs/redux',
      },
      {
        name: 'Logger for Redux',
        link: 'https://github.com/evgenyrodionov/redux-logger',
      },
      {
        name: 'Redux Thunk',
        link: 'https://github.com/gaearon/redux-thunk',
      },
      {
        name: 'shortid',
        link: 'https://github.com/dylang/shortid',
      },
      {
        name: 'Tcomb Form Native',
        link: 'https://github.com/gcanti/tcomb-form-native',
      },
      {
        name: 'AlgorithmVisualizer',
        link: 'https://github.com/parkjs814/AlgorithmVisualizer',
      },
      {
        name: 'Regexper',
        link: 'https://github.com/javallone/regexper-static',
      },
      {
        name: 'Design Patterns for Humans',
        link: 'https://github.com/kamranahmedse/design-patterns-for-humans',
      },
    ];

    return (
      <ScrollView>
        <Label text="MIT" />
        <List containerStyle={{ borderTopWidth: 0 }}>
          {mitProjects.map(project =>
            <ListItem
              rightIcon={{ name: 'open-in-new' }}
              key={project.link}
              title={project.name}
              onPress={() => { Helper.openLink(project.link); }}
            />,
          )}
        </List>
        <Label text="BSD" />
        <List containerStyle={{ borderTopWidth: 0 }}>
          {bsdProjects.map(project =>
            <ListItem
              rightIcon={{ name: 'open-in-new' }}
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
