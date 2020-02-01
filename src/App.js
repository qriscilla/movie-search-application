import React, {Component} from 'react';
import './App.css';
import Form from './components/Form';
import Movies from './components/Movies';

const API_KEY = '37cbb44eaa2f92cdb9ef7ba91a012e48';

class App extends Component {

  state = {
    movies: []
  }

  movieAPI = async (e) => {
    const movieTitle = e.target.elements.movieTitle.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieTitle}`);
    const data = await api_call.json();
    this.setState({movies: data.results});
    console.log(this.state.movies);
  }

  render() {
    return (
      <div className='app'>
        <header className="App-header">
        </header>
        <Form movieAPI={this.movieAPI} />
        <Movies movies={this.state.movies} />
      </div>      
    );
  }
}

export default App;