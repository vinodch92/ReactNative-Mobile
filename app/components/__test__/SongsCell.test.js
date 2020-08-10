import React from 'react';
import { shallow } from 'enzyme';
import { View, Text, Image } from 'react-native';
import SongsCell from '../SongsCell';

const songsInfo = {
  result: [
    {
      collectionViewUrl: '',
      collectionName: '',
      artistName: '',
      trackName: '',
      trackTimeMillis: '',
    },
  ],
};

describe('SongsCell', () => {
  describe('Rendering', () => {
    const wrapper = shallow(<SongsCell songsInfo={songsInfo} />);
    it('renders the container view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(View).length).toEqual(5);
      expect(wrapper.find(Text).length).toEqual(3);
      expect(wrapper.find(Image).length).toEqual(1);
    });
  });
});
