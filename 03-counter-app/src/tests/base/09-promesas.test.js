import '@testing-library/jest-dom';

import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/data';

describe('Pruebas en el archivo 09-promesas.test.js', () => {

    // Test getHeroeById retorna un heroe
    test('Debe de retornar un Heroe async', ( done ) => {

        const id = 1;

        getHeroeByIdAsync( id )
                    .then( heroe => {

                        expect( heroe ).toBe( heroes[0] );
                        done();

                    });

    });

    test('Debe de obtener un error si el heroe por id no existe', (done) => {
        
        const id = 10;
        getHeroeByIdAsync( id )
                    .catch( err => {

                        expect( err ).toBe('No se pudo encontrar el héroe');
                        done();

                    })

    });
    
 
});

