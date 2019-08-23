import React from 'react';
import { shallow } from 'enzyme';
import RecordingItem from './RecordingItem';

describe('RecordingItem component', () => {
  it('renders App', () => {
    const wrapper = shallow(<RecordingItem recording={{ title: 'test' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
