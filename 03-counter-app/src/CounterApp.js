import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value = 0 } ) => {

    const [ counter, setCounter ] = useState( value ); // return []


    // const [ nombre, setNombre ] = useState('Goku');
    // console.log(nombre, setNombre);


    // handleAdd
    const handleAdd = () => {
        // setCounter(counter + 1);
        setCounter( (c) => c + 1 );
    };

    // handleSubtract
    const handleSubtract = () => {
        // setCounter(counter + 1);
        setCounter( (c) => c - 1 );
    };

    // handleReset
    const handleReset = () => {
        // setCounter(counter + 1);
        setCounter( value );
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>count: { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>        
    )

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;