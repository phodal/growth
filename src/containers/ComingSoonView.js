import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';

import AppConfig from '../constants/config';

const GoogleAnalytics = new GoogleAnalyticsTracker(AppConfig.gaTrackingId);

class ComingSoonView extends Component {
  static componentName = 'ComingSoonView';

  static defaultProps = {
    type: '',
  };

  static propTypes = {
    type: PropTypes.string,
  };

  componentDidMount() {
    GoogleAnalytics.trackEvent('ComingSoon', this.props.type);
  }

  render() {
    return (
      <View>
        <Text style={{ padding: 20, textAlign: 'center' }}> 这个功能在 TODO List 里，如果你需要请点个赞</Text>
        <Button
          icon={{ name: 'thumb-up' }}
          title="需要"
          borderRadius={6}
          backgroundColor={'#03a9f4'}
        />
        <Button
          icon={{ name: 'thumb-down' }}
          title="不需要"
          style={{ paddingTop: 20 }}
          borderRadius={6}
        />
      </View>
    );
  }
}

export default ComingSoonView;
