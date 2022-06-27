import React, { useEffect, useState } from "react";
import requests from "./requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const request = await fetch(requests.fetchNetflixOriginals);
        const data = request.json();
        return data;
      };
      fetchData().then((r) => {
        setMovie(r.results[Math.floor(Math.random() * (r.results.length - 1))]);
        console.log();
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  //stringtrunkate of the banner description
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://www.themoviedb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
      </div>
      <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      <div className="banner_fadebottom"></div>
    </header>
  );
};

export default Banner;
