import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
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

class SuperCardView extends React.Component {
  componentName = 'SuperCardView';

  render() {
    return (
      <View style={styles.cardContainer}>
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
    );
  }
}


SuperCardView.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default SuperCardView;
