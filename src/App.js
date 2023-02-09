import React from "react";
import Row from "./Row";
import "./App.css";
import request from "./request";
import Banner from "./banner";

function App() {
  return (
    <>
      <Banner />
      <div className="App">
        <h1>NETFLIX</h1>
        <Row title="Originals" fetchUrl={request.NetflixOriginals} isLargeRow />
        <Row title="Trending Movies" fetchUrl={request.Trending} />
        <Row title="TopRated Movies" fetchUrl={request.TopRated} />
        <Row title=".Action Movies" fetchUrl={request.ActionMovies} />
        <Row title="Comedy Movies" fetchUrl={request.ComedyMovies} />
        <Row title="Horror Movies" fetchUrl={request.HorrorMovies} />
        <Row title="Romance Movies" fetchUrl={request.RomanceMovies} />
        <Row title="Documantaries" fetchUrl={request.Documantaries} />
      </div>
    </>
  );
}

export default App;
