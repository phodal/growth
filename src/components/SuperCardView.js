import React, { PropTypes } from 'react';
import {
  View, Text, StyleSheet, Platform,
  TouchableHighlight,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

import AppColors from '../theme/colors';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    margin: 10,
    height: 100,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 1, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  },
});

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
];

class SuperCardView extends React.PureComponent {

  static renderContent(section, i, isActive) {
    return (
      <Animatable.View
        duration={300}
        transition="backgroundColor"
        style={{ backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}
      >
        <Animatable.Text
          duration={300}
          easing="ease-out"
          animation={isActive ? 'zoomIn' : false}
        >
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  static renderHeader(section, index, isActive) {
    return (
      <Animatable.View
        duration={300}
        transition="backgroundColor"
      >
        <View style={styles.cardContainer}>
          <TouchableHighlight
            underlayColor="#fff"
            onPress={() => {}}
          >
            <View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'column', margin: 15 }}>
                  <View style={{ height: 40 }}>
                    <Text style={{ fontSize: 20, marginTop: 5, marginBottom: 15 }}>
                      {this.props.title}
                    </Text>
                  </View>
                  <View style={{ height: 40 }}>
                    <Text style={{ marginTop: 5, marginBottom: 15 }}>
                      {this.props.subTitle}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ height: 100, alignItems: 'flex-end', left: -10 }}>
                <Icon size={100} name={this.props.iconName} type={'ionicon'} color={AppColors.brand.primary} />
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </Animatable.View>
    );
  }

  constructor(props) {
    super(props);
    this.renderContent = SuperCardView.renderContent.bind(this);
    this.renderHeader = SuperCardView.renderHeader.bind(this);
  }

  componentName = 'SuperCardView';


  render() {
    return (
      <Accordion
        sections={SECTIONS}
        renderHeader={this.renderHeader}
        renderContent={this.renderContent}
      />
    );
  }
}


SuperCardView.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default SuperCardView;
