import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input component', () => {
  it('renders Input', () => {
    const wrapper = shallow(<Input artist="David Bowie" inputChange={() => {}} onSearch={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});