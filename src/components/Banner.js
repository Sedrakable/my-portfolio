import React from "react";
import ReactDOM from "react-dom";
import Avatar from "./Avatar";

const avatar_img = require("../content/avatar.JPG");
console.log(avatar_img);
function Banner() {
  return (
    <div className="banner">
      <div>
        <h2>
          Hello, I'm <span>Sedrak</span> and i'm a
        </h2>
        <h1>Front End Development</h1>
        <h2 className="phrase">Making simple UI with complex designs </h2>
      </div>
      <Avatar />
    </div>
  );
}

export default Banner;
