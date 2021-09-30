import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';

describe('Prueba en el componente de <RealExampleRef />', () => {

    const wrapper = shallow(<RealExampleRef />);

    test('Debe de mostrar correctamente el componente de <RealExampleRef />', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar el componente <MultipleCustomsHooks />', () => {

        wrapper.find('button').simulate('click');

        expect( wrapper.find('MultipleCustomsHooks').exists() ).toBe(true);

    });
    

});