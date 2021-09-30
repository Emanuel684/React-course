import React from 'react';
import HooksApp from '../HooksApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Prueba del componente HooksApp', () => {
    test('Deberia de mostrarse de manera correcta', () => {
        
        const wrapper = shallow(<HooksApp />);

        expect(wrapper).toMatchSnapshot();

    })
    
})
