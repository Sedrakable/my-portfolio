import React from "react";
import Hexagon from "react-hexagon";
import BigArrow from "./svgs/BigArrow";

interface ScrollButtonProps {
  customClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const ScrollButton: React.FC<ScrollButtonProps> = (props) => {
  return (
    <div
      className={"btn-scroll d-none"}
      onClick={(e) => {
        props.customClick(e);
      }}
    >
      <BigArrow />
      <Hexagon className="hex" />
    </div>
  );
};
