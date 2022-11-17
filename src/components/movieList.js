import React from 'react';
// import { Link } from "react-router-dom";

function MovieList({movieData}) {
    const lists = movieData.map(movie => {
        var filePath = ""
        try {
            filePath = require(`../assets/movieHeroImages/${movie.id}.jpeg`);
        } catch (ex) {
            filePath = require(`../assets/movieHeroImages/defaultImage.jpeg`);
        }   
        return (
          <li key={movie.id} className="card">
          <img style={{height: "236.29px"}} 
               src={filePath} 
               alt={movie.title} />
          <h4 className='eggName'>{movie.id}</h4>
          <h4>{movie.title}</h4>
          <h4>{movie.genres}</h4>
          </li>
        )
        
      })

  return (
    <div className="grow">
      <div className='cards lists'>
        {lists}
      </div>
    </div>
   
  )
}

export default MovieList