import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '../../MyData/data';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

const MovieDescription = () => {
  const navigate = useNavigate(); 
    const params = useParams() ;
    const [movie,  setmovie] = useState([])
      useEffect(() => {
        setmovie(moviesData.find((movie)=> movie.id=== +params.id))
      
      
      }, [params.id])
      
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.trailer} />
      <Card.Body>
        <Card.Title>
        {movie.title}
        </Card.Title>
        <Card.Text>
        {movie.description}
        </Card.Text>
        <Button variant="primary"
        onClick={()=> navigate(-1)}
        
        >Go Back</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieDescription
