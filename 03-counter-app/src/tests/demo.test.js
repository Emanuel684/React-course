
describe('Pruebas en el archivo demo.test.js', () => {
    
    test('Deben de ser iguales los string', () => {
    
        // 1. inicialozacion
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 ); // mensaje === mensaje2
    
    });

});

