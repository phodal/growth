import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import * as shortid from 'shortid';
import SuperCardView from '../../components/SuperCardView';
import SECTIONS from '../../constants/SECTIONS';

class Home extends Component {
  static componentName = 'Home';

  render() {
    return (
      <ScrollView>
        {
          SECTIONS.map(section => (
            <SuperCardView
              title={section.title}
              key={shortid.generate()}
              subTitle={section.description}
              sections={section}
              iconName={'md-home'}
            />
          ))
        }
      </ScrollView>
    );
  }
}

export default Home;
