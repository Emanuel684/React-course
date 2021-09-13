import React from "react";
// import React, { Fragment } from "react";

// SFC STYLES FUNTIONAL COMPONET
const PrimeraApp = ( { saludo } ) => {

    // const saludo = 'Hola Mundo';

    // console.log( props );

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre> */}
            <p>Mi primera aplicacion</p>
        </>
    );
    

}

export default PrimeraApp;