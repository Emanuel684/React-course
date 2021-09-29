import React from 'react';
import AddCategory from "../../components/AddCategory";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';



describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe de mostrar <AddCategory /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');

        const value = 'Hola Mundo';

        // console.log(input.html());

        input.simulate('change', { target: { value } });

        const petiquet = wrapper.find('p');

        expect( petiquet.text().trim() ).toBe( value );

    });

    test('No debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'One Punch';

        wrapper.find('input').simulate('change', { target: { value } });
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // expect( setCategories ).toHaveBeenCalled();
        // expect( setCategories ).toHaveBeenCalledTimes(1);
        // expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        wrapper.find('input').simulate('change', { target: '' });

        // expect( wrapper.find('p').prop('value')).toBe('');

    });
    


});