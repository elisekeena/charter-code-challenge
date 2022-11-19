import React, { } from 'react';
import Footer from './Footer';


function SingleMovie({setShowModal, movie}) {
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
    <button className="closeButton" onClick={() => closeModal()}> X </button>
      <div>
          <img 
          src={filePath} 
          alt={movie.title} 
          height="300"  
          width= "400" 
          /> 
      </div>

    <h3> {movie.id}</h3>
    <h3> {movie.title}</h3>
    <h3>Genres:</h3>
    <ul > {movie.genres.map((genre,idx) =>
        <li className ="genreList" key={idx}>{genre}</li>
        )}
    </ul>
    </div>
    <Footer/> 
      </div> 
  </>
)
}

export default SingleMovie