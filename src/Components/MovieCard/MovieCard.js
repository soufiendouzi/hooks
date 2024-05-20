import React from 'react'
import Card from 'react-bootstrap/Card';
import MovieRating from "../Rate/Rating"

const MovieCard = ({movie }) => {
  return (
    <div >
        <Card className='caard' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title} </Card.Title>
        <Card.Text> {movie.description}
        </Card.Text>
        <MovieRating isMovieRating={true} MovieRating={movie.rate} />
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
