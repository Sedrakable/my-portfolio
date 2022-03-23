import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import NavbarColumn from "./components/NavbarColumn";
import Banner from "./components/Banner";
import Cards from "./components/Cards";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
    this.navColumn = React.createRef();
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll, true);
  };

  onScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window

    const nav = this.nav.current;
    const navColumn = this.navColumn.current;

    const navHeight = nav.offsetHeight;
    const navColumnWidth = navColumn.offsetWidth;

    const ratio = (navHeight - scrollY) / navHeight;
    const xColumn = ratio * navColumnWidth;

    console.log(
      "navY: " + ratio + " navHeight: " + navColumnWidth + " Ratio: " + xColumn
    );

    this.navbarOpacity(nav, ratio);
    this.navbarMove(navColumn, xColumn, ratio);
  };

  navbarOpacity = (nav, opacity) => {
    nav.style.opacity = opacity;
    opacity <= 0 ? nav.classList.add("v-none") : nav.classList.remove("v-none");
  };

  navbarMove = (nav, x, ratio) => {
    nav.style.left = ratio >= 0 ? `${-x}px` : "0px";
  };

  render() {
    return (
      <div className="App">
        <Navbar ref={this.nav} />
        <NavbarColumn ref={this.navColumn} />
        <div className="container">
          <Banner />
          <div className="projects">
            <h2>Projects</h2>
            <Cards />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
