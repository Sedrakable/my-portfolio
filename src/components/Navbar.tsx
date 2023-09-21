import React from "react";

import MainLogo from "./MainLogo";
import { Capsule } from "./Capsule/Capsule";

type Tab = {
  title: string;
};

type NavBarProps = {
  tabs: Tab[];
  customClick: (e: React.MouseEvent<HTMLAnchorElement>, i: number) => void;
  ref: React.RefObject<HTMLElement>;
};

export const Navbar = React.forwardRef<HTMLElement, NavBarProps>(
  (props, ref) => {
    const { tabs, customClick } = props;
    return (
      <nav className="navbar" ref={ref}>
        <MainLogo />
        <div className="tabs">
          {tabs.map((tab, index) => {
            return (
              <a
                className={index === 0 ? "active" : ""}
                onClick={(e) => {
                  customClick(e, index);
                }}
                href="#"
                key={index}
              >
                <h2>{tab.title}</h2>
              </a>
            );
          })}
          <Capsule />
        </div>
      </nav>
    );
  }
) as React.FC<NavBarProps>;
