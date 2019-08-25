import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';

describe('Paging component', () => {
  it('renders Paging', () => {
    const wrapper = shallow(<Paging onPrevious={() => {}} onNext={() => {}} currentPage={6} totalPages={80}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
