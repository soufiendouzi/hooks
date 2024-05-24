import React from 'react'
import Form from 'react-bootstrap/Form';

const FilterName = ({search , setSearch} ) => {
  return (
    <div  className='foorm'>
              <Form.Control type="text" placeholder="Enter movie Title"
              value={search} 
              onChange={(e)=>setSearch(e.target.value)}
              />

    </div>
  )
}

export default FilterName
