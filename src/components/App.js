import React, {useState, useEffect} from 'react'
import MovieList from './movieList';


function App() {
    const [movieData, setmovieData] = useState([]);

    useEffect(() => {
      fetch("https://code-challenge.spectrumtoolbox.com/api/movies", { 
          headers: {Authorization: 'Api-Key q3MNxtfep8Gt' },
        }
      )
      .then(res => res.json())
      .then(data => {
        setmovieData(data["data"])
    })}, [setmovieData]);
  
    function getLatestRecipeData(data){
        setmovieData(movieData => [...movieData, data]);
    };
    
  console.log("hello world")
  console.log(movieData)
    return (
      <div>
          <MovieList movieData={movieData} />
            <h1>Hello </h1>
      </div>
    )
  }
  
  export default App