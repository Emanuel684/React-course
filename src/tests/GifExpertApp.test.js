import React from 'react';
import GifExpertApp from "../GifExpertApp";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
// import { useFetchGifs } from '../../hooks/useFetchGifs';
// jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifExpertApp />', () => {

    const category = 'One Punch';


    test('Debe de mostrar <GifExpertApp /> correctamente', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar una lista de categorias', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];

        const wrapper = shallow( <GifExpertApp defaulCategories={categories} /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    });
    
    

});