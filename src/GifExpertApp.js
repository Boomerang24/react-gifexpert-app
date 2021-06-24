import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories(categories.concat('LesNepes')); --- Mine
    //     // setCategories( [ 'LosPrimis', ...categories]); --- Con operador Spread
    //     setCategories( cats => [ ...cats, 'Guaynna']);
    // }



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={ handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );
}