import React, { useEffect, useState } from "react";
import Navigasi from "./components/Navigasi";

export default function Movie() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b01f0a490c4126adb1d5a66a5ad05f1d"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      <Navigasi/>
      {movieList.map((movie) => (
        <div key={movie.id} className="max-w-sm m-2 mt-10 w-64 ml-12">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-125 duration-200">
            <img
              className="w-full h-96"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-black">{movie.title}</h2>
              <p className="text-black">Release Date: {movie.release_date}</p>
              <p className="text-black">Vote Average: {movie.vote_average}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
