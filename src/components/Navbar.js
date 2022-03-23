import React from "react";
import ReactDOM from "react-dom";
import MainLogo from "./MainLogo";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
    this.state = { scrollTop: 0 };
  }

  onScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.nav.current.scrollTop;
    console.log(
      `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
    );
    this.setState({
      scrollTop: scrollTop,
    });
  };

  moveNavbar = () => {
    console.log(window.scrollY);
    this.nav.current.classList.add("red");
  };

  render() {
    const { scrollTop } = this.state;
    return (
      <nav ref={this.nav} onScroll={this.onScroll}>
        <MainLogo />
        <div className="tabs">
          <a className="active" href="#">
            <h2>Home</h2>
          </a>
          <a href="#">
            <h2>About</h2>
          </a>
          <a href="#">
            <h2>Projects</h2>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
