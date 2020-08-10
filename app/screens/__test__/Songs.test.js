import React from 'react';
import { shallow } from 'enzyme';
import { SafeAreaView, FlatList } from 'react-native';
import Songs from '../Songs';

describe('Songs', () => {
  describe('UI test cases', () => {
    const wrapper = shallow(<Songs />);
    it('renders the main view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(SafeAreaView).length).toEqual(1);
      expect(wrapper.find(FlatList).length).toEqual(1);
    });
  });
});
