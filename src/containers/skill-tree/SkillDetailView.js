import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import * as shortid from 'shortid';

import SKILL_TREE_DATA from './SKILL_TREE_DATA';

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
      skillLinkList = (<List containerStyle={{ marginBottom: 20 }}>
        {
          skillData.links.map(link => (
            <ListItem
              key={shortid.generate()}
              title={link.label}
            />
          ))
        }
      </List>);
    }

    return (
      <View>
        <Card
          title={skillData.title}
        >
          <Text>{ skillData.description }</Text>
        </Card>
        {skillLinkList}
      </View>
    );
  }
}

export default SkillDetailView;
