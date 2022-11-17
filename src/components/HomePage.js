import React, { useState } from 'react'
import MovieList from './movieList';
import Search from './Search';


function HomePage({movieData}) {
    const [searchInput, setSearchInput] = useState("");
    const searchedMovie = movieData.filter(movie => movie.title.toLowerCase().includes(searchInput.toLocaleLowerCase()));
    
    return (
      <div style={{textAlign: "center"}}>
        <div style={{ 
        backgroundImage: `url("https://cdn.dribbble.com/users/774095/screenshots/6615293/egg_short_dribbble_v01.gif")`,
        textAlign: "center",
        // backgroundSize: "contain",
        backgroundRepeat: "round",
        }}>
        <h1 className = "tagName" >SEARCH FOR A MOVIE! </h1>
        </div>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        {searchInput === "" ? <MovieList movieData={movieData}/> : <MovieList movieData={searchedMovie} />}
      </div>
    )
  
    }
  export default HomePage