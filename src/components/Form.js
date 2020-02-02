import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Form = props => (
    <form onSubmit={props.movieAPI} style={{marginBottom:'2rem'}}>
        <button className='search-button'><FontAwesomeIcon className='fontIcon' icon={faSearch} /></button>
        <span><input className='search-input' type='text' placeholder='search a movie' name='movieTitle'></input></span>
    </form>    
);

export default Form;