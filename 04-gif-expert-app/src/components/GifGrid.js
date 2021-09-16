import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    console.log(loading);
    console.log(images);



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

export default GifGrid;
