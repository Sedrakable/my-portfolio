import React from "react";
import { Sun, Moon } from "./svgs/WeatherLogos";

export const Capsule = (props) => {
  return (
    <div className="capsule" onClick={(e) => props.customCLick(e)}>
      <div className="toggle"></div>
      {props.color !== "dark" ? <Sun /> : <Moon />}
    </div>
  );
};
