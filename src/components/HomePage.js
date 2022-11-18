import React, { useState } from 'react'
import MovieList from './movieList';
import Search from './Search';
import Filter from './Filter';

function HomePage({movieData, genresData}) {
    const [searchInput, setSearchInput] = useState("");
    const [filterGenre, setFilterGenre] = useState("");

    // This is where search and filter happened
    var searchedMovie = movieData.filter(movie => movie.title.toLowerCase().includes(searchInput.toLocaleLowerCase()));
    var filteredMovie = movieData.filter(movie => movie.genres.some(genre => genre === filterGenre));
    var result = []
    
    // logic to display search and filter data
    if (!searchedMovie && filterGenre){
        result = filteredMovie
    } else if (searchedMovie && !filterGenre) {
        result = searchedMovie
    } else {
        // combine results from search and filter
        result = searchedMovie.filter(value => filteredMovie.includes(value));
    }
    
    return (
      <div style={{textAlign: "center"}}>
        <div style={{ 
        // backgroundImage: `url("https://cdn.dribbble.com/users/774095/screenshots/6615293/egg_short_dribbble_v01.gif")`,
        textAlign: "center",
        // backgroundSize: "contain",
        backgroundRepeat: "round",
        }}>
        <h1 className = "tagName" >SEARCH FOR A MOVIE! </h1>
        </div>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        <Filter filterGenre={filterGenre} setFilterGenre={setFilterGenre} genresData={genresData} />
        
        {result.length === 0 && <h1> No results were found. Try something else! </h1> }
        {(searchInput === "" && filterGenre === "") ? <MovieList movieData={movieData}/> : <MovieList movieData={result} />}
      </div>
    )
  
    }
  export default HomePage