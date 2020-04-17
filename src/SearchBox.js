import React, {useState} from 'react';
import './SearchBox.css'
import {robots} from './robots'

const SearchBox = (props) => {
  
    return (
        <div className="center">
            <input 
                type="search"
                placeholder="search a robot"
                onChange={props.onChange}
               
            /> 
        </div>
    )
}

export default SearchBox;
