import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import MultipleCustomsHooks from '../../../components/03-examples/MultipleCustomsHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');

describe('Pruebas en <MultipleCustomsHooks />', () => {

    test('Debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data:null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomsHooks />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar la informacion', () => {
       
        useFetch.mockReturnValue({
            data: [{
                author: 'Emanuel',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomsHooks />);

        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-2').text().trim() ).toBe('Hola mundo');
        expect( wrapper.find('footer').text().trim() ).toBe('Emanuel');

    });
    

});

