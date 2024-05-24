import React from 'react'
import Card from 'react-bootstrap/Card';
import MovieRating from "../Rate/Rating"
import { Link } from 'react-router-dom';
import { Button } from 'antd';

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
     <Link to ={`/movie/${movie.id}`}>
     <Button variant='primary ' >More Detail</Button>
     </Link>
     
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
