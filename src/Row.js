import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseUrl = "https://www.themoviedb.org/t/p/original/";
const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(fetchURL);
        const data = await response.json();
        return data;
      };

      fetchData().then((r) => {
        setMovies(r.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie.title || movie?.original_name)
        .then((url) => {
          console.log(movie);
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(trailerUrl);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  console.log(movies);
  return (
    <div className="row">
      <h3 className="row__title">{title}</h3>
      <div className="row-posters">
        {movies?.map((item) => {
          return (
            <img
              key={item.id}
              onClick={() => {
                handleClick(item);
              }}
              className={`row_poster ${isLargeRow && "isLargePoster"}`}
              src={`${baseUrl}${
                isLargeRow ? item.poster_path : item.backdrop_path
              }`}
              alt={item.title}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
