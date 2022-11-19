import React, { useState } from 'react';
import SingleMovie from './singleMovie';


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
          <div className="grow" key={movie.id}>
          <img style={{height: "236.29px"}} 
               src={filePath} 
               alt={movie.title} />
          <h4 className="homeFont"  onClick={() => openModal(movie)}>{movie.title}</h4>
          </div>
        )
      })

  return (
    
      <div className="test">
        {showModal ? <SingleMovie setShowModal={setShowModal} movie={selectedMovie}/> : null}
        {lists}
      </div>
   
  )
}

export default MovieList