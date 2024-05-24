import React from 'react'
import {Routes , Route } from 'react-router-dom'
import App from './App'
import MovieDescription from './Components/MovieDescription/MovieDescription'
import NavBar from './Components/NavBar';

const Accueil = () => {
  return (
    <div>
       <NavBar />
      <Routes>

        <Route exact path='/' element ={<App/>} />
        <Route  path='/movie/:id' element ={<MovieDescription/>} />


      </Routes>
    </div>
  )
}

export default Accueil
