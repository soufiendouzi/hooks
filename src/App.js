import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterName from './Components/FilterName/FilterName';
import MovieList from './Components/MovieListe/MovieList';
import { moviesData } from './MyData/data';
import { useState } from 'react';
import FilterRate from "./Components/Rate/Rating" 

function App() {
  const [movies , setMovies] = useState(moviesData) ;
  const [search , setSearch] = useState("") ; 
  const [rating , setRating] = useState(1) ; 



  // handle movie 
  const add = (newMovie)=> {
    setMovies ([...movies, newMovie] ) 

  }
  return (
    <div className="App">
      
     <FilterName search={search} setSearch={setSearch}/> 
     <FilterRate isMovieRating={false} rating={rating} setRating={setRating} />
     <AddMovie  add={add} />
     <MovieList movies={movies} search={search} rating={rating} /> 
    </div>
  );
}

export default App;
