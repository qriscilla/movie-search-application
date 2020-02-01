import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Form = props => (
    <form onSubmit={props.movieAPI} style={{marginBottom:'2rem'}}>
        <input className='search-input' type='text' placeholder='search a movie...' name='movieTitle'></input>
        <button className='search-button'><FontAwesomeIcon className='fontIcon' icon={faSearch} /></button>
    </form>    
);

export default Form;