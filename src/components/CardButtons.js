import React from "react";

const CardButtons = (props) => {
  return (
    <div className="btns">
      {props.view && (
        <a id="left" href={props.view} target="_blank">
          Visit
        </a>
      )}
      {props.children}
      {props.code && (
        <a id="right" href={props.code} target="_blank">
          Code
        </a>
      )}
    </div>
  );
};

export default CardButtons;
