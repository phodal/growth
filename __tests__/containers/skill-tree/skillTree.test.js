import 'react-native';
import { Actions, Scene } from 'react-native-router-flux';
import React from 'react';
import SkillTree from '../../../src/containers/skill-tree/SkillTree';
import SkillDetailView from '../../../src/containers/skill-tree/SkillDetailView';

describe('test skill tree ', () => {
  // it('test render', function () {
    // eslint-disable-next-line no-unused-vars
    // const tree = renderer.create(
    //   <SkillTree skillId={1} />,
    // );
    //
    // const treeJson = tree.toJSON();
    // expect(treeJson).toMatchSnapshot();
  // });

  it('should goto detail view', () => {
    const scenesData = (
      <Scene
        key="root"
      >
        <Scene
          key={'skillDetail'}
          title={'技能'}
          component={SkillDetailView}
        />
      </Scene>
    );
    Actions.create(scenesData);
    Actions.callback = () => { };

    const spy = jest.spyOn(Actions, 'skillDetail');
    const view = new SkillTree();

    view.handleMessage({
      nativeEvent: {
        data: JSON.stringify({
          id: '1',
        }),
      },
    });
    expect(spy).toBeCalledWith({ skillId: 1 });
  });
});
