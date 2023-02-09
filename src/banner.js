import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./banner.css";
const img_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.NetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${img_url}${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="BannerComponents">
        <h1>{movie.title || movie.name || movie.original_name}</h1>
        <div>
          <button className="ButtonBanner">Play</button>
          <button className="ButtonBanner">Add to watch list</button>
          <p>{movie.overview}</p>
        </div>
      </div>
    </header>
  );
}

export default Banner;
