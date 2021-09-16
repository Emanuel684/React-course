import React, { useState, useEffect } from 'react'

import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=One+Piece&limit=10&api_key=VBgswINHv9vM76LeKiJlxdNaqCqu9Qv8';

        const resp = await fetch( url );

        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        } )

        setImages(gifs);


    }

    return (
        <div className="card-grid">
            <h3>{category}</h3>
                {
                    images.map( img => {
                        return(
                            <GifGridItem
                            key={img.id}
                            { ...img }
                            />
                        )
                    })
                }
        </div>
    )
}

export default GifGrid;
