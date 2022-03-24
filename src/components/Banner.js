import React from "react";
import ReactDOM from "react-dom";
import Hexagon from "react-hexagon";

function Banner() {
  return (
    <div className="banner">
      <div className="text">
        <h2>
          Hello, I'm <span>Sedrak</span> and i'm a
        </h2>
        <h1>Front End Developer</h1>
        <h2 className="phrase">Making simple UI with complex designs </h2>
      </div>
      <Hexagon
        backgroundSize={640}
        backgroundImage={require("../content/avatar.JPG")}
      />
    </div>
  );
}

export default Banner;
