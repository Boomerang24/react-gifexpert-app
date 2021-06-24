import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

    const [images, setImages] = useState([]);

    // Solo se ejecuta cuando el componente es renderizado la 1ra vez
    useEffect( () => {
        getGifs( category )
        //.then( imgs => setImages( imgs ))
        .then( setImages );
    }, [ category ]) 



    return (
        <>
            <h3> { category }</h3>
            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </>
    )
}
