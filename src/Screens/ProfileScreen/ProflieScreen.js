import React from "react";
import "./ProflieScreen.css";
import Navbar from "../../Screens/HomeScreen/navbar.js";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function ProflieScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="body">
        <h1>Edit Profile</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxIi9VcRXindEC1M94AOqTnCaU0-16LidGg&usqp=CAU"
          alt="your avatar"
        />
        <div className="Details">
          <h2>{user.email}</h2>
          <div className="plans"></div>
        </div>
        <button className="signout">Sign Out </button>
      </div>
    </div>
  );
}

export default ProflieScreen;
