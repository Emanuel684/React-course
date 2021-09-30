import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    
    test('Debe de retornar valores por defecto ', () => {
        
        const { result } = renderHook( () => useCounter() ); 

        expect( result.current.state ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    });

    test('Debe de tener el counter en 100', () => {
        
        const { result } = renderHook( () => useCounter(100));

        expect( result.current.counter ).toBe(100);

    });

    test('Debe de incrementar el counter en 1', () => {

        const { result } = renderHook( () => useCounter(100) );

        const {  }

    });
    
    
    

});
