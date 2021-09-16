import React from 'react';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';
import { shallow } from 'enzyme';



describe('Pruebas en <GifGridItem />', () => {

    // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, Soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // });

    test('Debe de mostrar <GifGridItem /> correctamente', () => {

        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<GifGridItem saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola, Soy Goku';
        const subTitulo = ' Soy un subtitulo ';
        const wrapper = shallow(
            <GifGridItem
                saludo={saludo}
                sutitulo={subTitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();

        // console.log(textoParrafo);

        expect(textoParrafo).toBe(subTitulo);

    })



})