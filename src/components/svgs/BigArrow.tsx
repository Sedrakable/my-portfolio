import React from "react";

const BigArrow = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 83.19 96"
      className="big-arrow"
      onClick={() => {
        props.customClick();
      }}
    >
      <g id="grid">
        <polygon className="cls-1" points="0 0 83.19 48 55.46 64 0 32 0 0" />
        <polygon className="cls-2" points="0 64 0 96 55.46 64 27.73 48 0 64" />
      </g>
    </svg>
  );
};
export default BigArrow;
