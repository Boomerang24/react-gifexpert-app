import React, { useState, useEffect } from 'react'

export const GifGrid = ( {category} ) => {

    const [images, setImages] = useState([]);

    // Solo se ejecuta cuando el componente es renderizado la 1ra vez
    useEffect( () => {
        getGifs();
    }, []) 

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Dogge&limit=10&api_key=DI9abxP0lUXQZgPtEYTAvw7xXH3a8Y98';
        const resp = await fetch(url);
        const {data} = await resp.json();

        // Barre c/u de las imagenes gracias al map
        const gifs = data.map( img => {
            // Este return transforma c/u de los elementos del arreglo
            // Y regresa la info que nos interesa
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs);
    }

    return (
        <div>
            <h3> { category }</h3>
            <ol>
                {
                    // Desestructurando el objeto
                    images.map( ({id, title}) => (
                    // images.map( img => (
                        <li key={ id }> { title }</li>
                    ))
                }
            </ol>
        </div>
    )
}
