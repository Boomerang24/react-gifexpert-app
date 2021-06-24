
//Ahora es una promesa que resuelve la coleccion de imagenes

export const getGifs = async( category ) => {

    // encodeURI reemplaza espacios, 
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=DI9abxP0lUXQZgPtEYTAvw7xXH3a8Y98`;
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

    return gifs;
}