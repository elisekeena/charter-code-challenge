import React from 'react'

const inputStyles = {
  padding: "12px",
  border: "3px solid #f8c146",
  boxShadow: "0px 0px 0px",
  borderColor: "#f8c146",
  outline: "10px",
  borderRadius: "25px",
  width: "35%"
};

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
    <div className= "searchButton" style={inputStyles}>       
        <select onChange={handleChange} value={filterGenre} >
        {displayGenres(genresData)}
		</select>

    </div>

  )
}

export default Filter