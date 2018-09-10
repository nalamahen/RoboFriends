import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to reducer Card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'jhon Snow',
            email: 'jhon@gami.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})