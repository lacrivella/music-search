import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('renders Header', () => {
    const wrapper = shallow(<Header title="awesome testing" />);
    expect(wrapper).toMatchSnapshot();
  });
});
