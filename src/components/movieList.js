import React, { useState } from 'react';
import SingleMovie from './singleMovie';
// import { Link } from "react-router-dom";

function MovieList({movieData}) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setselectedMovie] = useState(false);
    const openModal = (movie) => {
        setShowModal(true);
        setselectedMovie(movie)
    };
    const lists = movieData.map(movie => {
        var filePath = ""
        try {
          // try to get poster if available
            filePath = require(`../assets/moviePosterImages/${movie.id}.jpeg`);
        } catch (ex) {
          // if failed, fall back to default image
            filePath = require(`../assets/moviePosterImages/defaultImage.jpeg`);
        } 
        
        return (
          <div key={movie.id} className="card">
          <img style={{height: "236.29px"}} 
               src={filePath} 
               alt={movie.title} onClick={() => openModal(movie)} />
          <h4 className='eggName'>{movie.id}</h4>
          <h4>{movie.title}</h4>
          </div>
        )
        
      })

  return (
    <div className="grow">
      <div className='cards lists'>
        {showModal ? <SingleMovie setShowModal={setShowModal} movie={selectedMovie}/> : null}
        {lists}
      </div>
    </div>
   
  )
}

export default MovieList