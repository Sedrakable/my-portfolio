import React from "react";
import ReactDOM from "react-dom";
import Hexagon from "react-hexagon";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="text">
          <h2>
            Hello, I'm <span>Sedrak</span> and i'm a
          </h2>
          <h1>Front End Developer</h1>
          <h2 className="phrase">Making simple UI with complex designs </h2>
          <div className="icons">
            {this.props.icons.map((icon) => {
              return icon;
            })}
          </div>
        </div>
        <div className="hex-holder">
          <Hexagon
            backgroundSize={640}
            backgroundImage={require("../content/avatar.JPG")}
          />
          <Hexagon className="flying blur" />
          <Hexagon className="flying expand" />
          <Hexagon className="flying expand one" />
          <Hexagon className="flying expand two" />
          <Hexagon className="flying expand three" />
        </div>
      </div>
    );
  }
}

export default Banner;
