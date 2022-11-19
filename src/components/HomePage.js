import React, { useState } from 'react'
import MovieList from './movieList';
import Search from './Search';
import Filter from './Filter';
import Footer from './Footer';

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
        <h1 className = "tagName" >CINEFLIX </h1>
        <hr></hr>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        <Filter filterGenre={filterGenre} setFilterGenre={setFilterGenre} genresData={genresData} />
        {result.length === 0 && <h1 style={{textAlign: "center", color: "white"}}> No results were found. </h1> }
        {(searchInput === "" && filterGenre === "") ? <MovieList movieData={movieData}/> : <MovieList movieData={result} />}
        <Footer/>
      </div>   
    )
}
  export default HomePage