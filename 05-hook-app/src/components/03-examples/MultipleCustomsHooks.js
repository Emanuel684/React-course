import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './effects.css';

const MultipleCustomsHooks = () => {

    const { state, increment } = useCounter( 1 );
    console.log(state);


    const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    // console.log(state);
    // console.log(loading);
    const { author, quote } = !!data && data[0];
    // console.log(author, quote);


    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                    ?
                        (
                            <div className="alert alert-info text-center">
                                Loading...
                            </div>
                        )
                    :
                        (
                            <blockquote className="blockquote text-right">
                                <p className="mb-2"> { quote } </p>
                                <footer className="blockquote-footer"> { author } </footer>
                            </blockquote>
                        )
            }
            
            <button className="btn btn-primary" onClick={ increment }>
                Siguiente quote
            </button>

        </div>
    )
}

export default MultipleCustomsHooks;