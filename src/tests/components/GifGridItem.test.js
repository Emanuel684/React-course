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

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow(<GifGridItem title={title} url={url} />);


    test('Debe de mostrar <GifGridItem /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);

    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');

        // console.log( img.props('src') );

        expect(img.props().src).toBe(url);

        expect(img.props().alt).toBe(title);

    });

    test('Debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');

        // console.log(div.props().className)

        expect(div.props().className).toBe("card animate__animated animate__fadeIn");

    })



    // test('Debe de mostrar el subtitulo enviado por props', () => {

    //     const saludo = 'Hola, Soy Goku';
    //     const subTitulo = ' Soy un subtitulo ';
    //     const wrapper = shallow(
    //         <GifGridItem
    //             saludo={saludo}
    //             sutitulo={subTitulo}
    //         />
    //     );

    //     const textoParrafo = wrapper.find('p').text();

    //     // console.log(textoParrafo);

    //     expect(textoParrafo).toBe(subTitulo);

    // })



})