import { getGifs } from '../../helpers/getGifs';


describe('Pruebas con getGifs Fecth', () => {
    
    test('Debe de traer 10 elementos ', async() => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );

    });

    test('Debe de traer 10 elementos ', async() => {
        
        const gifs = await getGifs('');

        // console.log(gifs);

        expect( gifs.length ).toBe( 0 );

    });

})


