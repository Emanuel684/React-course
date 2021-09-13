import '@testing-library/jest-dom';

import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/data';

describe('Pruebas en el archivo 08-imo-exp.test.js', () => {

    // Test getHeroeById retorna un heroe
    test('Debe de retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(data => data.id === id);

        expect(heroe).toEqual(heroeData);

    });

    // Test getHeroeById debe retornar undefined
    test('Debe de retornar un undefined si Heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe( undefined );

    });

    // toEqual al arreglo filtrado
    test('Debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const owners = getHeroesByOwner(owner);

        const ownersData = heroes.filter(data => data.owner === owner);

        expect(owners).toEqual(ownersData);

    });

    // length = 2
    test('Debe de retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const owners = getHeroesByOwner(owner);

        const ownersData = heroes.filter(data => data.owner === owner);

        expect(owners.length).toBe(ownersData.length);

    });

});

