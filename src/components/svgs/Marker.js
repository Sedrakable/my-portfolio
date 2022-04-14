import React from "react";

export const Marker = ({ customClick }) => {
  return (
    <svg
      className="marker"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55.46 64.01"
      onClick={() => {
        customClick();
      }}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon
            className="cls-1"
            points="27.73 0 0 16 27.73 32 55.46 16 27.73 0"
          />
          <polygon
            className="cls-2"
            points="0.02 48 27.74 64.02 27.73 32 0.01 15.98 0.02 48"
          />
          <polygon
            className="cls-3"
            points="55.44 48 55.45 15.98 27.73 32 27.72 64.02 55.44 48"
          />
        </g>
      </g>
    </svg>
  );
};

export const VideoMarker = ({ customClick }) => {
  return (
    <svg
      className="marker video-marker"
      viewBox="2 2 20 20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        customClick();
      }}
    >
      <path d="M19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM16.09 4L12.09 8H7.91L11.91 4H16.09ZM4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H9.09L5.09 8H4V5ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V10H20V19ZM20 8H14.91L18.91 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V8Z" />
    </svg>
  );
};
