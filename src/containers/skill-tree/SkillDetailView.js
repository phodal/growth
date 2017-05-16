import React, { Component, PropTypes } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import * as shortid from 'shortid';

import SKILL_TREE_DATA from './SKILL_TREE_DATA';
import AppFonts from '../../theme/fonts';

// eslint-disable-next-line import/no-unresolved
const filter = require('lodash.filter');

class SkillDetailView extends Component {
  static componentName = 'SkillDetailView';

  static propTypes = {
    skillId: PropTypes.number,
  };

  static defaultProps = {
    skillId: null,
  };

  render() {
    const skillData = filter(SKILL_TREE_DATA, { id: this.props.skillId })[0];
    let skillLinkList = null;
    if (skillData.links) {
      skillLinkList = (<View>
        <Text style={{ paddingTop: 15, paddingLeft: 15, fontSize: AppFonts.h4.size }}>扩展资料</Text>
        <List>
          {
            skillData.links.map(link => (
              <ListItem
                key={shortid.generate()}
                title={link.label}
              />
            ))
          }
        </List>
      </View>);
    }

    let skillBookList = null;
    if (skillData.books) {
      skillBookList = (<View>
        <Text style={{ paddingTop: 15, paddingLeft: 15, fontSize: AppFonts.h4.size }}>推荐书籍</Text>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            skillData.books.map(link => (
              <ListItem
                key={shortid.generate()}
                title={link.label}
              />
            ))
          }
        </List>
      </View>);
    }

    let rankDescriptions = null;
    if (skillData.rankDescriptions) {
      rankDescriptions = (<View>
        <Text style={{ paddingTop: 15, paddingLeft: 15, fontSize: AppFonts.h4.size }}>技能要求</Text>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            skillData.rankDescriptions.map(link => (
              <ListItem
                key={shortid.generate()}
                title={link}
              />
            ))
          }
        </List>
      </View>);
    }

    return (
      <ScrollView>
        <Card
          title={skillData.title}
        >
          <Text>{ skillData.description }</Text>
        </Card>
        {rankDescriptions}
        {skillLinkList}
        {skillBookList}
      </ScrollView>
    );
  }
}

export default SkillDetailView;
