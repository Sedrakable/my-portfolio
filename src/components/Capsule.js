import React from "react";
import { Sun, Moon } from "./svgs/WeatherLogos";

export const Capsule = React.forwardRef((props) => (
  <div className="capsule" onClick={(e) => props.customCLick(e)}>
    <div className="toggle"></div>
    {props.color !== "dark" ? <Sun /> : <Moon />}
  </div>
));
