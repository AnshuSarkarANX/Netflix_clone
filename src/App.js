import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// Components

import "./App.css";
import HomeScreen from "./Screens/HomeScreen/Homescreen.js";
import LoginScreen from "./Screens/LoginScreen/LoginScreen.js";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<HomeScreen />} />)
);
const user = 0;
function App() {
  return (
    <>
      <div className="App">
        {!user ? <LoginScreen /> : <RouterProvider router={router} />}
      </div>
    </>
  );
}

export default App;
