import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback((num) => {

        setCounter( (e) => e + num );

    }, [setCounter]);

    return (
        <div>
            <h1>useCallback Hook: {counter} </h1>
            <hr />

            <ShowIncrement increment={increment} />

        </div>
    )
};

export default CallbackHook;
