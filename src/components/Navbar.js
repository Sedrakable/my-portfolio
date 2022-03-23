import React from "react";
import ReactDOM from "react-dom";
import MainLogo from "./MainLogo";

const Navbar = React.forwardRef((props, ref) => (
  <nav className="navbar" ref={ref}>
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
));

export default Navbar;