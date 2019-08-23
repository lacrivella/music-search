import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

describe('Lyrics component', () => {
  it('renders Lyrics', () => {
    const wrapper = shallow(<Lyrics artist="Cat" title="Meow" lyrics="meow meow meow meeeow"/>);
    expect(wrapper).toMatchSnapshot();
  });
});