import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';


describe('Pruebas en el componente de <TodoListItem />', () => {
   
    const wrapper = shallow(<TodoListItem /> );

    test('Debe de mostrar correctame', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
    

});