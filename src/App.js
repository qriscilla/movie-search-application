import React from 'react';
import './App.css';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Form getMovie={this.getMovie} />
        </header>
      </div>      
    );
  }
}

export default App;