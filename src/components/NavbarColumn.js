import React from "react";
import ReactDOM from "react-dom";
import MainLogo from "./MainLogo";

const NavbarColumn = React.forwardRef((props, ref) => (
  <nav className="navbarColumn" ref={ref}>
    <div className="top">
      <MainLogo />
      <div className="tabs">
        {props.tabs.map((tab, index) => {
          return (
            <a
              className={index === 0 ? "active" : ""}
              onClick={(e) => {
                props.customClick(e, index);
              }}
              href="#"
            >
              <h3>{tab.title}</h3>
            </a>
          );
        })}
      </div>
    </div>
    <div className="icons">
      {props.icons.map((icon) => {
        return (
          <a href={icon.href} target="_blank">
            {icon.comp}
          </a>
        );
      })}
    </div>
  </nav>
));

export default NavbarColumn;
