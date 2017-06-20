import React from 'react';
import renderer from 'react-test-renderer';
// import * as chai from 'chai';
// import { shallow } from 'enzyme';
// import { ListView } from 'react-native';

import ForumView from '../../../../src/containers/community/forum/ForumView';

// const mockData = require('./mockdata.json');

describe('test forum render', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ForumView
        data={[]}
        canLoadMoreContent={false}
        onLoadMoreAsync={() => {}}
        reFetch={() => {}}
        dataUrl={'https://forum.growth.ren/api/discussions'}
        element={() => {}}
      />,
    );

    const treeJson = tree.toJSON();
    expect(treeJson).toMatchSnapshot();
  });
});

// describe('test forum view props', () => {
//   it('should refetch data success', () => {
//     const mockFetch = jest.fn();
//
//     const wrapper = shallow(<ForumView
//       data={mockData.data}
//       canLoadMoreContent
//       onLoadMoreAsync={() => {}}
//       reFetch={mockFetch}
//       dataUrl={'https://forum.growth.ren/api/discussions'}
//       element={() => {}}
//     />);
//
//     expect(wrapper).toBeDefined();
//     chai.expect(wrapper.find(ListView)).to.have.length(1);
//
//     // wrapper.find(ListView).props.refreshControl;
//     // expect(mockFetch).toHaveBeenCalled();
//   });
// });
