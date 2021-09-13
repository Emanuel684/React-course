import React from "react";
import PropTypes from 'prop-types';
// import React, { Fragment } from "react";

// SFC STYLES FUNTIONAL COMPONET
const PrimeraApp = ( { saludo, subtitulo } ) => {

    // const saludo = 'Hola Mundo';
    // console.log( props );
    // if( !saludo ) {
    //     throw new Error( 'El saludo es necesario' );
    // }

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre> */}
            <p> { subtitulo } </p>
        </>
    );
    
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;