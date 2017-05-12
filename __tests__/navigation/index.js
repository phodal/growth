import 'react-native';
import { expect } from 'chai';

import scenes from '../../src/navigation/index';

describe('router test', () => {
  it('test router should currently', () => {
    expect(scenes.comingSoon.component.name).to.equal('ComingSoonView');
  });

  it('should return correct tabs key', () => {
    const tabs = scenes.tabs.children;

    expect(tabs[0]).to.eq('home');
    expect(tabs[1]).to.eq('discover');
    expect(tabs[2]).to.eq('skillTree');
    expect(tabs[3]).to.eq('community');
    expect(tabs[4]).to.eq('userCenter');
  });
});
