

// Funciones en JS

// const saludar = function( nombre ){
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola Mundo`;



// console.log( saludar('Emanuel') );

console.log( saludar2('Vegeta') );

console.log( saludar3('Goku') );

console.log( saludar4() );


const getUser = () => ({
        uid: 'ABS123',
        username: 'El_Papi1502'
});


const user = getUser();
console.log( getUser() );


// Tarea
// 1. Transformen a una funcion de Flecha 
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
const getUsuarioActivio = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre
});
const usuarioActivo = getUsuarioActivio('Emanuel');
console.log( usuarioActivo );