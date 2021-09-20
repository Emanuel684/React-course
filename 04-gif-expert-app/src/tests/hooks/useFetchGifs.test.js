import React from 'react';
import GifGrid from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGifs', () => {


    test('Debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );

        // console.log( result.current.data );

        const { data, loading } = result.current;

        // const { data, loading } = useFetchGifs( 'One Punch' );

        // console.log(data, loading);

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );

    });

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );

        await waitForNextUpdate();

        const { data, loading } = result.current;

        // const { data, loading } = useFetchGifs( 'One Punch' );

        // console.log(data, loading);

        expect( data.length ).toBe(10);
        expect( loading ).toBe( false );

    });
    
    

});