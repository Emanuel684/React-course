import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en todoReducer', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);

    });

    test('Debe de agregar un TODO', () => {

        const addTodo = {
            id: 3,
            desc: 'Aprender Angular',
            done: false
        }

        const { result } = renderHook(() => todoReducer(demoTodos, {
            type: 'add',
            payload: addTodo
        }));

        expect(result.current.length).toBe(3);

        expect(result.current).toEqual([...demoTodos, addTodo]);

    });

    test('Debe de borrar un TODO', () => {

        const { result } = renderHook(() => todoReducer([...demoTodos, {
            id: 3,
            desc: 'Aprender Angular',
            done: false
        }], {
            type: 'delete',
            payload: 3
        }));

        expect(result.current.length).toBe(2);

        expect(result.current).toEqual(demoTodos);

    });

    test('Debe de hacer el TOGGLE del TODO', () => {

        const { result } = renderHook( () => todoReducer(demoTodos, {
            type: 'toggle',
            payload: 1
        }) );

        console.log(result.current);

        console.log(result.current[0].done)

        expect( result.current[0].done ).toBe(true);

    });


});
