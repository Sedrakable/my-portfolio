import React from "react";

import MainLogo from "./MainLogo";
import { Capsule } from "./Capsule/Capsule";

interface NavbarColumnProps {
  tabs: { title: string }[];
  customClick: (e: React.MouseEvent<HTMLAnchorElement>, index: number) => void;
  icons: { href: string; comp: React.ReactNode }[];
  ref: React.RefObject<HTMLElement>;
}

export const NavbarColumn = React.forwardRef<HTMLElement, NavbarColumnProps>(
  (props, ref) => {
    return (
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
                  key={index}
                >
                  <h3>{tab.title}</h3>
                </a>
              );
            })}
          </div>
        </div>
        <div className="bottom">
          <Capsule />
          <div className="icons">
            {props.icons.map((icon, index) => {
              return (
                <a key={index} href={icon.href} target="_blank">
                  {icon.comp}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
) as React.FC<NavbarColumnProps>;
