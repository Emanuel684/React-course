


const personajes = ['Goku', 'Vegeta', 'Trunks'];


const [ , , p3 ] = personajes;

console.log( p3 );

// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );



const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
// console.log(arr)

console.log( letras, numeros );




// Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre

const UseState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') } ];
}

const [nombre, setNombre] = UseState( 'Goku' );

// console.log(arr)

// arr[1]();

console.log(nombre);
setNombre();

