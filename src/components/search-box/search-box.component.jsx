/* eslint-disable no-unused-expressions */
//Functional component
//Whn you dont need state and life cycle methods create a functional component

import React from 'react';

const SearchBox = ({ placeholder, handleChange}) => {
    return(
    <input 
    className='form-control'
    type='search' 
    placeholder={placeholder}
    onChange={handleChange}>
    </input>
    )
};

export default SearchBox;
