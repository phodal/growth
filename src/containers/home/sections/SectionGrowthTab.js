import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import * as shortid from 'shortid';

import Launch from '../../../components/discover/Launch';
import TODO_LISTS from '../../../constants/TODO_LISTS';
import BOOKS from '../../../constants/BOOKS';

class SectionGrowthTab extends Component {
  static componentName = 'SectionGrowthTab';
  static propTypes = {
// eslint-disable-next-line react/forbid-prop-types
    sectionInfo: PropTypes.object.isRequired,
  };

  static showGrowthView(section) {
    let slug = '';
    const sectionInfo = section.info;

    if (sectionInfo.type === 'book') {
      return Actions.recommendBooks({
        data: [{ name: section.title, books: BOOKS['zh-cn'][sectionInfo.domain] }],
      });
    } else if (sectionInfo.type === 'tool') {
      slug = `/growth-content/tool/${sectionInfo.domain}.html`;
    } else if (sectionInfo.domain) {
      slug = `/growth-content/growth/${sectionInfo.domain}/${sectionInfo.slug}.html`;
    }

    return Actions.htmlView({
      domain: sectionInfo.domain,
      slug,
      title: sectionInfo.title,
      isFullSlug: true,
    });
  }

  render() {
    const growthView = this.props.sectionInfo.growthView;
    const todoView = this.props.sectionInfo.todoView;

    const growthViewComponent = growthView ?
      (<List>
        {
          growthView[0].sections.map(section => (
            <ListItem
              key={shortid.generate()}
              title={section.title}
              onPress={() => { SectionGrowthTab.showGrowthView(section); }}
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
                onPress={() => Launch.todoList(TODO_LISTS['zh-cn'][todo.info.domain])}
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
  }
}

export default SectionGrowthTab;
