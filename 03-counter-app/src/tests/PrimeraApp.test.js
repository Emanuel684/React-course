import React from 'react';
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

// import { render } from '@testing-library/react';


describe('Pruebas en <PrimeraApp />', () => {
    
    // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, Soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // });
    
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Goku';
        const subTitulo = ' Soy un subtitulo ';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                sutitulo={ subTitulo } 
            /> 
        );

        const textoParrafo = wrapper.find('p').text();

        // console.log(textoParrafo);

        expect( textoParrafo ).toBe( subTitulo );

    })
    
    

})

