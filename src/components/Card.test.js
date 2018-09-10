import {shallow} from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to reducer Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})
