import '@testing-library/jest-dom';

import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en el archivo 07-deses-arr.test.js', () => {

    // Test retornaArreglo
    test('retornarArreglo debe de retornar un string y un numero', () => {

        const [ letras, numeros ] = retornaArreglo(); // ['ABC', 123]

        // expect( arr ).toEqual( ['ABC', 123] );

        expect( letras ).toBe( 'ABC' );
        expect ( typeof letras ).toBe( 'string' );

        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );

    });


});

