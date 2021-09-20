import React from 'react';
import GifExpertApp from "../GifExpertApp";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
// import { useFetchGifs } from '../../hooks/useFetchGifs';
// jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifExpertApp />', () => {

    const category = 'One Punch';


    test('Debe de mostrar <GifExpertApp /> correctamente', () => {

        // useFetchGifs.mockReturnValue({
        //     data: [],
        //     loading: true
        // });

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();

    });
    

});