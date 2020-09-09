import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputVaue] = useState('Hola mundo');

    const handleInputChange = (e) =>{
        setInputVaue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats=>[inputValue,...cats]);
            setInputVaue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                onChange={handleInputChange}/>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}