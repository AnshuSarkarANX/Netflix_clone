import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
//components
import "./App.css";
import HomeScreen from "./Screens/HomeScreen/Homescreen.js";
import LoginScreen from "./Screens/LoginScreen/LoginScreen.js";
import { auth } from "./firebase.js";
import { login, logout } from "./features/userSlice";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<HomeScreen />} />)
);
function App() {
  const user = null;
  const diapatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      userAuth
        ? //logged in
          diapatch(login({ uid: userAuth.uid, email: userAuth.email }))
        : //logged out
          diapatch(logout);
    });
    return unsubscribe;
  });
  return (
    <>
      <div className="App">
        {!user ? <LoginScreen /> : <RouterProvider router={router} />}
      </div>
    </>
  );
}

export default App;
