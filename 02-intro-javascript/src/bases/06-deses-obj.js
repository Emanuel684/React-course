

// Desestructuracion
// Asignacion Desestructurante

const persona = {
     nombre: 'Tony',
     edad: 45,
     clave: 'Ironman',
     rango: 'Soldado'
};


// const { edad, clave, nombre, } = persona;


// console.log( persona.nombre );
// console.log( persona.edad );
// console.log( persona.clave );


const retornaPersona = ( { clave, nombre, edad, rango = 'Capitan' } ) => {

    // console.log(usuario)

    // const { edad, clave, nombre, } = usuario;

    // console.log( nombre, edad, rango );

    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

// retornaPersona( persona );
const { anios, nombreClave, latlng:{lat, lng} } = retornaPersona( persona );


console.log( anios, nombreClave );
// console.log( latlng );
console.log( lat, lng );

