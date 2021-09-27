import React, { memo } from 'react';

const Small = memo(({ value = 0 }) => {

    console.log(' Me volvi a mostrar ');

    return (
        <small> { value } </small>
    )
})

export default Small;