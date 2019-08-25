import React from 'react';
import { shallow } from 'enzyme';
import Artists from './Artists';

describe('Artists component', () => {
  it('renders Artists', () => {
    const wrapper = shallow(<Artists artists={[{ name: 'WASP', disambiguation: 'Metal Band', id: 'whatev' }, {name: 'Poison', disambiguation: 'Hair Metal Band', id: 'meep' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});