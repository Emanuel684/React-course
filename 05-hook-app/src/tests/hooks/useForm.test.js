import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm hook', () => {

    const initialForm = {
        name: 'Emanuel',
        email: 'emanuelacag@gmail.com'
    };

    test('Debe de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));

        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('Debe de cambiar el valor del formulario  (cambiar name)', () => {

        const { result } = renderHook(() => useForm(initialForm));

        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: "name", value: "Emanuel Acevedo"
                }
            });
        });

        const [formValues] = result.current;

        expect(formValues).toEqual({ ...initialForm, name: 'Emanuel Acevedo' })

    });

    test('Debe de restablecer el formulario con RESET', () => {

        const { result } = renderHook(() => useForm(initialForm));

        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: "name", value: "Emanuel Acevedo"
                }
            });
            reset();
        });

        const [formValues] = result.current;

        expect(formValues).toEqual(initialForm);

    });




});
