/* eslint-disable no-unreachable */
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
//components
import "./App.css";
import { auth } from "./firebase.js";
import { login, logout, selectUser } from "./features/userSlice";
import HomeScreen from "./Screens/HomeScreen/Homescreen.js";
import LoginScreen from "./Screens/LoginScreen/LoginScreen.js";
import ProfileScreen from "./Screens/ProfileScreen/ProflieScreen.js";
import Error from "./ErrorPage.js";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
      }
      //logged out
      else dispatch(logout);
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/profilescreen" element={<ProfileScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="*" element={<Error />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
