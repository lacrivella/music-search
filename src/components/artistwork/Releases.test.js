import React from 'react';
import { shallow } from 'enzyme';
import Releases from './Releases';

describe('Releases component', () => {
  it('renders Releases', () => {
    const wrapper = shallow(<Releases releases={[{ title: 'hello', id: 'fake' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
