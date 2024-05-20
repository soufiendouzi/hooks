import React from 'react'
import Form from 'react-bootstrap/Form';

const FilterName = (inputSearch , setInputSearch ) => {
  return (
    <div  className='foorm'>
              <Form.Control type="text" placeholder="Enter movie Title"
              value={inputSearch} 
              onChange={(e)=>setInputSearch(e.target.value)}
              />

    </div>
  )
}

export default FilterName
