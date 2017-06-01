import { Linking } from 'react-native';
import Helper from '../../src/utils/helper';

describe('helper test ios', () => {
  it('should call linking function', () => {
    const spy = jest.spyOn(Linking, 'canOpenURL');
    Helper.openLink('https://forum.growth.ren');
    expect(spy).toBeCalledWith('https://forum.growth.ren');
  });

  it('should open itunes in browser', () => {
    const spy = jest.spyOn(Linking, 'canOpenURL');
    Helper.getProfessionalSkilltree();
    expect(spy).toBeCalledWith('https://itunes.apple.com/cn/app/growth-ji-neng-shu-phodal/id1193898864?mt=8');
  });
});

describe('helper test android', () => {
  beforeEach(() => {
    jest.resetModules();
    const rn = require('react-native'); // eslint-disable-line global-require
    rn.Platform.OS = 'android';
  });

  it('should open market in browser', () => {
    const spy = jest.spyOn(Linking, 'canOpenURL');
    Helper.getProfessionalSkilltree();
    expect(spy).toBeCalledWith('market://details?id=ren.growth.skilltree');
  });

  it('should open more features link', () => {
    const spy = jest.spyOn(Linking, 'canOpenURL');
    Helper.getMoreFeatures();
    expect(spy).toBeCalledWith('https://github.com/phodal/growth-ng/issues');
  });
});
