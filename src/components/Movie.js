import React from 'react';
import {Link} from 'react-router-dom';

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
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <h4>{movie.release_date}</h4>
                        <p>{movie.overview}</p>
                        <button>
                            <Link to='/'>Go back</Link>
                        </button>
                    </div>
                }
            </div>
        );
    }

};

export default Movie;