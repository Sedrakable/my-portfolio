import React, { Component } from "react";

class Background extends Component {
  constructor(props) {
    super(props);
    this.glow = React.createRef();
  }

  componentDidMount = () => {
    window.addEventListener("mousemove", this.move, true);
  };

  move = (event) => {
    // console.log("x:" + event.clientY + "dom: " + this.glow);
    const glow = this.glow.current;
    // glow.style.animation = "none";
    const clone = glow.cloneNode(true);
    clone.classList.add("shutdown");
    glow.after(clone);

    this.track(clone, event);
    this.track(glow, event);

    const timeout = setTimeout(() => {
      clone.remove();
      // glow.style.animation = "2s pulse infinite";
    }, 1900);
  };

  track = (glow, event) => {
    const glowHeight = glow.offsetHeight;
    const glowWidth = glow.offsetWidth;
    glow.style.top = `${event.clientY - glowHeight / 2}px`;
    glow.style.left = `${event.clientX - glowWidth / 2}px`;
  };

  getTimeLeft = (timeout) => {
    return Math.ceil(
      (timeout._idleStart + timeout._idleTimeout - Date.now()) / 1000
    );
  };

  render() {
    return (
      <div className="background">
        <div className="grid"></div>
        <div ref={this.glow} className="glow pulse"></div>
      </div>
    );
  }
}

export default Background;
