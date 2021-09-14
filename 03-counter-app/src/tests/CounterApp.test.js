import React from 'react';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';


describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp value={ 0 } /> );

    beforeEach ( () => {
        
        wrapper = shallow( <CounterApp value={ 0 } /> );
    });
    
    test('Debe de mostrar <CounterApp /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar el h2 enviado por props', () => {
        
        const valueDefault = "count: 0 ";
        const wrapper = shallow( 
            <CounterApp 
                value={ 0 } 
            /> 
        );

        const counterH2 = wrapper.find('h2').text();

        // console.log(textoParrafo);

        expect( counterH2 ).toBe( valueDefault );

    });

    test('Debe de incrementar con el boton de +1', () => {
       
        wrapper.find('button').at(0).simulate('click');
        const counterH2 = wrapper.find('h2').text().trim();
        // console.log(`xx${counterH2}xx`);
        expect( counterH2 ).toBe('count: 1')

    });

    test('Debe de decrementar con el boton de -1', () => {
       
        const btn2 = wrapper.find('button').at(2).simulate('click');
        // console.log(btn2);
        const counterH2 = wrapper.find('h2').text().trim();
        // console.log(`xx${counterH2}xx`);
        expect( counterH2 ).toBe('count: -1')

    });

    test('Debe de restablecer con el boton de reset', () => {
        
        const wrapper = shallow( 
            <CounterApp 
                value={ 10 } 
            /> 
        );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');

        const counterH2 = wrapper.find('h2').text().trim();
        console.log(`xx${counterH2}xx`);
        expect( counterH2 ).toBe('count: 10');

    });

})

