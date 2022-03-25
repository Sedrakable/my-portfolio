import React from "react";
import ReactDOM from "react-dom";
import MainLogo from "./MainLogo";

const Navbar = React.forwardRef((props, ref) => (
  <nav className="navbar" ref={ref}>
    <MainLogo />
    <div className="tabs">
      {props.tabs.map((tab, index) => {
        return (
          <a
            className={index === 0 ? "active" : ""}
            onClick={(e) => {
              props.customClickEvent(e, index);
            }}
            href="#"
          >
            <h2>{tab.title}</h2>
          </a>
        );
      })}
    </div>
  </nav>
));

export default Navbar;
