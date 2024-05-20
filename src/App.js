import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterName from './Components/FilterName/FilterName';
import MovieList from './Components/MovieListe/MovieList';
import { moviesData } from './MyData/data';
import { useState } from 'react';
import FilterRate from "./Components/Rate/Rating" 
import NavBar from './Components/NavBar';

function App() {
  const [movies , setMovies] = useState(moviesData) ;
  const [inputSearch , setInputSearch] = useState("") ; 
  const [rating , setRating] = useState(1) ; 



  // handle movie 
  const add = (newMovie)=> {
    setMovies ([...movies, newMovie] ) 

  }
  return (
    <div className="App">
     <NavBar /> <br></br>
     <FilterName inputSearch={inputSearch} setInputSearch={setInputSearch}/> 
     <FilterRate isMovieRating={false} rating={rating} setRating={setRating} />
     <AddMovie  add={add} />
     <MovieList movies={movies} inputSearch={inputSearch} rating={rating} /> 
    </div>
  );
}

export default App;
