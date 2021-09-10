// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";


// console.log( owners );


const getHeroeById = (id) => heroes.find((element) => element.id === id);



// console.log( getHeroeById(2) );

// console.log( heroes );



// find?, filter
const getHeroesByOwner = ( owner ) => heroes.filter(element => element.owner === owner);


// console.log( getHeroesByOwner('DC') )

export {
    getHeroeById,
    getHeroesByOwner
}
