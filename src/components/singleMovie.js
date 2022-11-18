import React, { useState, useEffect } from 'react';


function SingleMovie({setShowModal, movie}) {
  const [singleRecipe, setSingleRecipe] = useState([]);
  const closeModal = (movie) => {
    setShowModal(false);
};
  var filePath = ""
  try {
    filePath = require(`../assets/movieHeroImages/${movie.id}.jpeg`);
} catch (ex) {
    filePath = require(`../assets/movieHeroImages/defaultImage.jpeg`);
}   
return (
  <>
  <div key={movie.id} className="popup-box">
    <div className="box">
      <div className="paddingClass">
          <img 
          className = "singleRecipeImg"
          src={filePath} 
          alt={movie.title} 
          height="400"  
          width= "400" 
          onClick={() => closeModal()}
          />
      </div>
    
    <h3> {movie.title}</h3>

    <h3>Genres:</h3>
    <ul> {movie.genres.map((genre,idx) =>
        <li key={idx}>{genre}</li>
        )}
    </ul>
    </div>
      </div> 
  </>
)
}

export default SingleMovie