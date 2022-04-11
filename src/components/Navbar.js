import React from "react";

import MainLogo from "./MainLogo";
import { Capsule } from "./Capsule";

const Navbar = React.forwardRef((props, ref) => (
  <nav className="navbar" ref={ref}>
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
            key={index}
          >
            <h2>{tab.title}</h2>
          </a>
        );
      })}
      <Capsule customCLick={props.colorToggle} color={props.color} />
    </div>
  </nav>
));

export default Navbar;
