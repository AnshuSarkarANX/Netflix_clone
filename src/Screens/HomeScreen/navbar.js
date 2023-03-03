/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-restricted-globals */
import { React, useState, useEffect } from "react";
import "./navbar.css";

function navbar() {
  const [show, handleshow] = useState(false);
  const Navbar_transition = () => {
    window.scrollY > 400 ? handleshow(true) : handleshow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", Navbar_transition);
    return () => removeEventListener("scroll", Navbar_transition);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="navbar_container">
        <img
          className="Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427"
          alt="logo"
        />
        <img
          className="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxIi9VcRXindEC1M94AOqTnCaU0-16LidGg&usqp=CAU"
          alt="your avatar"
        />
      </div>
    </div>
  );
}

export default navbar;
