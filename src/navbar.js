import React from "react";
import "./navbar.css";

function navbar() {
  return (
    <div className="nav nav_black">
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
