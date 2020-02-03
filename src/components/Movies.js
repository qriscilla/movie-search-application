import React from 'react';
import {Link} from 'react-router-dom';
import noImage from './noImage.png';

const Movies = props => (
    <div className='container'>
        <div className='row'>
            {props.movies.map((movie) => {
                return (
                    <div key={movie.id} className='col-md-4' style={{marginBottom:'2rem'}}>
                        <div className='movies-card'>
                            { movie.poster_path !== null 
                                ? (<img className='movies-img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}></img>)
                                : (<img className='movies-img' src={noImage} alt={movie.title}></img>)
                            }
                            <div className='movies-card-info'>
                                <h5 className='info'>{movie.title.length < 27 ? `${movie.title}` : `${movie.title.substring(0,27)}...`}</h5>
                                <p className='info'>({movie.release_date.substring(0,4)})</p>
                                <button className='movies-card-button'>
                                    <Link 
                                        className='movies-card-link' 
                                        style={{textDecoration:'none'}}
                                        to={{ 
                                        pathname: `/movie/${movie.id}`,
                                        state: {movie: movie.title}
                                    }}>Details</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Movies;