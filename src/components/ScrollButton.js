import React, { Component } from "react";
import Hexagon from "react-hexagon";
import BigArrow from "./svgs/BigArrow";

const ScrollButton = React.forwardRef((props, ref) => (
  <div
    className={"btn-scroll d-none"}
    ref={ref}
    onClick={(e) => {
      props.customClickEvent(e);
    }}
  >
    <BigArrow />
    <Hexagon className="hex" />
  </div>
));

export default ScrollButton;
