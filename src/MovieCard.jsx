import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    // movieCard component takes a movie prop and destructures its properties
  return (  // Outermost container representing the movie card, 'key' is set to 'imdbID'
    <div className="movie" key={imdbID}>
    
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} /> 
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;