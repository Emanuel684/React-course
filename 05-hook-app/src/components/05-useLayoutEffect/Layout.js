import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

const Layout = () => {

    const { state, increment } = useCounter(1);
    console.log(state);


    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        
        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />


            <blockquote className="blockquote text-right">
                <p className="mb-2" ref={ pTag }> {quote} </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </button>

        </div>
    )
}

export default Layout;