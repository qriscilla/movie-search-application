import React from 'react';

const Movies = props => (
    <div className='container'>
        <div className='row'>
            {props.movies.map((movie) => {
                return (
                    <div key={movie.id} className='col-md-4' style={{marginBottom:'2rem'}}>
                        <div className='movie-card'>
                            <img 
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                alt={movie.title}>
                            </img>
                            <div className='movie-card-info'>
                                <h5 className='movie-card-title'>{movie.title.length < 30 ? `${movie.title}` : `${movie.title.substring(0,30)}...`}</h5>
                                <p>{movie.release_date}</p>
                            </div>
                            <button className='movie-card-button'>Details</button>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Movies;