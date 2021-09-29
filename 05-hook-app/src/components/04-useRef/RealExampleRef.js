import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import MultipleCustomsHooks from '../03-examples/MultipleCustomsHooks';

const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleREf</h1>
            <hr />

            {show && <MultipleCustomsHooks />}

            <button className="btn btn-primary mt-5" onClick={() => {
                setShow(!show);
            }}>
                Show/Hide
            </button>

        </div>
    )
};

export default RealExampleRef;