import { getHeroeById, getHeroesByOwner } from './bases/08-imp-exp';

// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout(() => {
//         // console.log(' 2 segundos despues')
//         // resolve();
//         const p1 = getHeroeById(2);
//         // console.log( p1 );
//         resolve( p1 );
//         // reject( 'No se pudo encontrar el heroe' );
//     }, 2000);

// } );

// promesa.then( (heroe) => {
//     console.log('Heroe', heroe);
// })
// .catch( error => console.warn( error ) );

const getHeroeByIdAsync = ( id ) => {
    
    return new Promise( (resolve, reject) => {
    
        setTimeout(() => {
            // console.log(' 2 segundos despues')
            // resolve();
            const p1 = getHeroeById(id);
            // console.log( p1 );
            if( p1 != undefined ){
                resolve( p1 );
            }else{
                reject( 'No se pudo encontrar el heroe' );
            }
            // reject( 'No se pudo encontrar el heroe' );
        }, 2000);
    
    } );

}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );