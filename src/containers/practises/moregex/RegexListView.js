import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { choiceRegex } from '../../../redux/regex/actions';
import REGEX_HUB_PATTERNS from './REGEX_HUB_PATTERNS';


class RegexListView extends Component {
  static componentName = 'RegexListView';

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  onPress(regex) {
    this.props.dispatch(choiceRegex(regex));
    Actions.pop({ regex });
  }

  keyExtractor = (item, index) => `key${index}`;

  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <FlatList
          data={REGEX_HUB_PATTERNS}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) =>
            <View>
              <ListItem
                title={item.name}
                onPress={() => this.onPress(item)}
              />
            </View>
          }
        />
      </View>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RegexListView);
