import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo 02-template-string.test.js', () => {
    
    test('Prueba en el metodo getSaludo() con argumento.', () => {

        const nombre = 'Emanuel';
    
        const saludo = getSaludo( nombre );
    
        expect( saludo ).toBe( 'Hola ' + nombre + '!');
    
    });

    // getSaludo debe de retornar Hola Carlos! si no hay argumento nombre
    test('Prueba en el metodo getSaludo() sin argumento.', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos!');

    })
    

});

