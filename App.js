import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=9bdcbc43";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");     // function where the searchbar searches for requested movies
  const [movies, setMovies] = useState([]);     // retrieves from the api based on the search term

  useEffect(() => {
    searchMovies("Batman");
  }, []);   // hook that runs side effect in function component.
  // in this case, the defaut term is batman when the page opens

  const searchMovies = async (title) => {       //can recall the search function and pass on a new title
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}            
          // this value can be either static or dynamic
          // if a string is given, it is static. Since its {searchTerm} it is dynamic
          // the output in the webpage is noticable
          onChange={(e) => setSearchTerm(e.target.value)}
          // e comes from the callback function ie event
          // allows us to type in the searchbar
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
          // whenever the user inputs a moviename in the search bar, it is going to dynamically change
        />
      </div>

      {movies?.length > 0 ? (       
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} /> 
            // initially this code was 
            // <movieCard movie1 = {movie1} />
            // movie1 to movie because we are pulling all the movie listings from the API
            // in the initial practice, we used movie1 to specify the gui for one single movie object
          ))}
        </div>
      ) : (     // if there are no movies and you want to render something else
        <div className="empty">
          <h2>No movies found</h2> 
        </div> // the h2 does not change any output on the code as there are sufficient amount of movies in the list
      )}
    </div>
  );
};

export default App;