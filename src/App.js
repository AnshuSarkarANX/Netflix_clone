/* eslint-disable react/jsx-no-undef */
import React from "react";
import Row from "./Row";
import "./App.css";
import request from "./request";

function App() {
  return (
    <div className="App">
      <h1>netflix-clone website</h1>
      {<Row title="Originals" fetchUrl={request.NetflixOriginals} />}
      {<Row title="Trending Movies" fetchUrl={request.Trending} />}
    </div>
  );
}

export default App;
