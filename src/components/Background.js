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
    // const glow = this.glow.current;
    this.glow.current.classList.remove("pulse");
    const clone = this.glow.current.cloneNode(true);
    clone.classList.add("shutdown");

    this.glow.current.after(clone);

    this.track(clone, event);
    this.track(this.glow.current, event);

    const timeout = setTimeout(() => {
      clone.remove();
      this.glow.current.classList.add("pulse");
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
        <div ref={this.glow} className="cursor glow pulse"></div>
      </div>
    );
  }
}

export default Background;
