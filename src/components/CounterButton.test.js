import {shallow} from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';
import { wrap } from 'module';

describe('Test CounterButton Component', () => {

    it('should render counter button component', () => {
        const mockColor = 'red';
        expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
    })
    
    it('should correctly increments the counter', () => {
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor} />);
    
        wrapper.find('[id="counter"]').simulate('click');
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({ count: 3});
        expect(wrapper.state()).toEqual({count: 3});
        expect(wrapper.props().color).toEqual('red');
    })
})
