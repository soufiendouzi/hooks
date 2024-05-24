import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies , search , rating }) => {
  return (
    <div className='list'>
      {movies
      .filter(movie => movie.title.toUpperCase().includes(search.toUpperCase())
       && 
       movie.rate >= rating )  
      .map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}

      
    </div>
  ) 
}

export default MovieList
