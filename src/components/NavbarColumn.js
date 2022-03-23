import React from "react";
import ReactDOM from "react-dom";
import MainLogo from "./MainLogo";

const NavbarColumn = React.forwardRef((props, ref) => (
  <nav className="navbarColumn" ref={ref}>
    <MainLogo />
    <div className="tabs">
      <a className="active" href="#">
        <h3>Home</h3>
      </a>
      <div className="bar"></div>
      <a href="#">
        <h3>About</h3>
      </a>
      <div className="bar"></div>
      <a href="#">
        <h3>Projects</h3>
      </a>
    </div>
  </nav>
));

export default NavbarColumn;
