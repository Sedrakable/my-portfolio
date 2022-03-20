import React from "react";
import ReactDOM from "react-dom";
import MainLogo from "./MainLogo";

function Navbar() {
  return (
    <nav>
      <MainLogo />
      <div className="tabs">
        <a className="active" href="#">
          <h2>Home</h2>
        </a>
        <a href="#">
          <h2>About</h2>
        </a>
        <a href="#">
          <h2>Projects</h2>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
