import React, { Component } from "react";

const Marker = ({ customClickEvent }) => {
  return (
    <svg
      className="marker"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55.46 64.01"
      onClick={() => {
        customClickEvent();
      }}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon
            class="cls-1"
            points="27.73 0 0 16 27.73 32 55.46 16 27.73 0"
          />
          <polygon
            class="cls-2"
            points="0.02 48 27.74 64.02 27.73 32 0.01 15.98 0.02 48"
          />
          <polygon
            class="cls-3"
            points="55.44 48 55.45 15.98 27.73 32 27.72 64.02 55.44 48"
          />
        </g>
      </g>
    </svg>
  );
};
export default Marker;
