import React from 'react'


function Filter({filterGenre, setFilterGenre, genresData}) {
    function handleChange(e) {
        setFilterGenre(e.target.value);
    }
    function displayGenres(genres) {
        let items = [];         
        for (let i = 0; i <= genres.length; i++) {             
             items.push(<option key={i} value={genres[i]}>{genres[i]}</option>);   
        }
        return items;
    }  

  return (
    <div>       
        <select className= "inputStyles" onChange={handleChange}>
          <option name="filter" value={filterGenre}> Genres</option>
        {displayGenres(genresData)}
         </select>

    </div>

  )
}

export default Filter