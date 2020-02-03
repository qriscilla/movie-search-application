import React from 'react';
import {Link} from 'react-router-dom';
import noImage from '../noImage.png';

const API_KEY = '37cbb44eaa2f92cdb9ef7ba91a012e48';

class Movie extends React.Component {

    state = {
        activeMovie: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.movie;
        const req = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`);
        const res = await req.json();
        this.setState({ activeMovie: res.results[0] });
        console.log(this.state.activeMovie);
    }

    render() {
        const movie = this.state.activeMovie;
        return (
            <div className='container'>
                {this.state.activeMovie.length !== 0 &&

                    <table>
                        <thead>
                            <tr>
                                <th>
                                    { movie.poster_path !== null 
                                        ? (<img className='movie-img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}></img>)
                                        : (<img className='movie-img' src={noImage} alt={movie.title}></img>)
                                    }
                                </th>
                                <th className='movie-card-info'>
                                    <h3>{movie.title}</h3>
                                    <h4>{movie.release_date.substring(0,4)}</h4>
                                    <p>{movie.overview}</p>
                                    <button className='movies-card-button'>
                                        <Link to='/' style={{textDecoration:'none'}}>Go back</Link>
                                    </button>
                                </th>
                            </tr>
                        </thead>
                    </table>


                    // <div className='row movie-card'>
                    //     <div className='col-md-6'>
                    //         <img className='movie-img'
                    //             src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    //             alt={movie.title} 
                    //         />
                    //     </div>
                    //     <div className='col-md-6 movie-card-info'>
                    //         <h3>{movie.title}</h3>
                    //         <h4>{movie.release_date}</h4>
                    //         <p>{movie.overview}</p>
                    //         <button>
                    //             <Link to='/'>Go back</Link>
                    //         </button>
                    //     </div>
                    // </div>




                }
            </div>
        );
    }

};

export default Movie;