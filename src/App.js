import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieDetails from './components/MovieDetails'
import MovieList from './components/MovieList';

class App extends Component {
  render() {
  return (
    <div className="App">
       <h1>Redux Movies</h1>
       <div className="container">
         <MovieList />
         <MovieDetails />
       </div>
    </div>
  );
 }
}

export default App;
