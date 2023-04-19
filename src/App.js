/* eslint-disable no-unreachable */
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, redirect } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
//components
import "./App.css";
import { auth } from "./firebase.js";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
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
    !user ? <Navigate to="LoginPage" /> : <Navigate to="Home" />,
    (
      <div>
        <Outlet />
      </div>
    )
  );
}

export default App;
