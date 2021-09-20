import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn' >{category}</h3>
            {/* {loading ? 'Cargando...' : <div className="card-grid">
                {
                    images.map(img => {
                        return (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        )
                    })
                }
            </div>} */}
            { loading && <p className='animate__animated animate__flash' >Loading...</p> }
            <div className="card-grid">
                {
                    images.map(img => {
                        return (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;
