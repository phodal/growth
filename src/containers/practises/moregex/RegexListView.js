import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import REGEX_HUB_PATTERNS from './REGEX_HUB_PATTERNS';

class RegexListView extends Component {
  static componentName = 'RegexListView';

  static defaultProps = {
    type: '',
  };

  static propTypes = {
    type: PropTypes.string,
  };

  keyExtractor = (item, index) => `key${index}`;

  render() {
    return (
      <View>
        <FlatList
          data={REGEX_HUB_PATTERNS}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) =>
            <View>
              <ListItem
                title={item.name}
              />
            </View>
          }
        />
      </View>
    );
  }
}

export default RegexListView;
