import React, {useState, useEffect} from 'react'
import HomePage from './HomePage';

function App() {
    const [movieData, setmovieData] = useState([]);
    const [genresData, setGenresData] = useState([]);

    useEffect(() => {
      fetch("https://code-challenge.spectrumtoolbox.com/api/movies", { 
          headers: {Authorization: 'Api-Key q3MNxtfep8Gt' },
        }
      )
      .then(res => res.json())
      .then(data => {
        // set movie data
        setmovieData(data["data"])
        // set genre data
        setGenresData(getGenres(data["data"]))
    })}, [setmovieData]);
   
    function getGenres(data){
        // get unique list of genres by double looping through
        // movies > genres
        var result = []
        data.forEach(movie => {
            movie.genres.forEach(genre => {
                if (!result.includes(genre)) {
                    result.push(genre)
                }
            })
        });
        return result
    };
    return (
      <div>
          <HomePage  movieData={movieData} genresData={genresData}/>  
      </div>
    )
  }
  
  export default App