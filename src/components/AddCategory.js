import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {

    const [inputvalue, setInputvalue] = useState(''); // useState(); = undefined

    const handleInputChange = ( e ) => {
        setInputvalue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if ( inputvalue.trim().length > 2 ) {
            setCategories( cats => [ inputvalue, ...cats ]);
            setInputvalue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputvalue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}