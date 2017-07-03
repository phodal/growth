import React, { Component } from 'react';
import HtmlView from '../../../components/HtmlView';

class MoRegexInfoVie extends Component {
  static componentName = 'MoRegexInfoVie';

  render() {
    return (
      <HtmlView domain={'misc'} slug={'regex'} />
    );
  }
}

export default MoRegexInfoVie;
