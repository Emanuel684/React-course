import '@testing-library/jest-dom';

import { getImagen } from '../../base/11-async-await';

describe('Pruebas en el archivo 11-async-await.test.js', () => {

    test('Debe de retornar el URL de la imagen', async() => {

        const url = await getImagen();

        expect( url.includes('https://') ).toBe( true );

    });

    
 
});

