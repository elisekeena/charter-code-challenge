import React from 'react';
// import { Link } from "react-router-dom";


function MovieList({movieData}) {

    const lists = movieData.map(movie => {
        return (
          <li key={movie.id} className="card">
          {/* <Link to={`/recipes/${egg.id}`}>
            <img style={{height: "236.29px"}} src={egg.image} alt={egg.name} />
          </Link>  */}
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