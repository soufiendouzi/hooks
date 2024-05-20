import React from 'react';
import {  Rate } from 'antd';


const Rating = ( MovieRating , isMovieRating,rating,setRating) => {
  const handleChange =(value) => {
    setRating={value}
  }  
  
  
  return isMovieRating ? (
    <div  className='ratte'>
      <Rate disabled  value={MovieRating} />
      
    </div>
  ) : (
    <div>
    <Rate  onChange={handleChange}  value={rating} />
    
  </div>
  )
}

export default Rating
