
const nombre   = 'Emanuel';
const apellido = 'Acevedo';

const nombreCompleto = `${ nombre } ${ apellido }`;


export function getSaludo( nombre = 'Carlos' ) {
    return 'Hola ' + nombre + '!';
}
