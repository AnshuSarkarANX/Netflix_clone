/* eslint-disable react/jsx-no-undef */
import React from "react";
import Row from "./Row";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>netflix-clone website</h1>
      {<Row title="Originals" />}
      {<Row title="Trending Movies" />}
    </div>
  );
}

export default App;
