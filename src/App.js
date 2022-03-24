import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import NavbarColumn from "./components/NavbarColumn";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import About from "./components/About";
import Background from "./components/Background";
import ScrollButton from "./components/ScrollButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.nav = React.createRef();
    this.navColumn = React.createRef();
    this.scrollBtn = React.createRef();
  }

  initialize = () => {
    this.navColumn.current.style.left = `${-100}px`;
  };

  componentDidMount = () => {
    this.initialize();
    this.createObserver();
    window.addEventListener("scroll", this.onScroll, true);
  };

  onScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window

    const navHeight = this.nav.current.offsetHeight;
    const navColumnWidth = this.navColumn.current.offsetWidth;

    const ratio = (navHeight - scrollY) / navHeight;
    const xColumn = ratio * navColumnWidth;

    // console.log(
    //   "navY: " + ratio + " navHeight: " + navColumnWidth + " Ratio: " + xColumn
    // );

    this.navbarOpacity(this.nav.current, ratio);
    this.navbarMove(this.navColumn.current, xColumn, ratio);
  };

  navbarOpacity = (nav, opacity) => {
    nav.style.opacity = opacity;
    opacity <= 0 ? nav.classList.add("v-none") : nav.classList.remove("v-none");
  };

  navbarMove = (nav, x, ratio) => {
    nav.style.left = ratio >= 0 ? `${-x}px` : "0px";
  };

  scrollPage = (e) => {
    const currentButton = e.currentTarget;
    const currentBox = currentButton.parentNode;

    const index = this.getBoxIndex(currentBox);

    const nextBox = currentBox.parentNode.children[index + 1];
    const nextButton = nextBox.querySelector(".btn-scroll");
    console.log(nextBox);
    console.log(nextButton);
    currentButton.classList.add("d-none");
    nextButton !== null && nextButton.classList.remove("d-none");
    nextBox.scrollIntoView({
      behavior: "smooth",
    });
    console.log("index: " + index);
  };

  getBoxIndex = (box) => {
    return [...box.parentNode.children].indexOf(box);
  };

  createObserver = () => {
    const options = {
      root: null,
      rootMargin: "-64px 0px",
    };

    console.log(options);
    const boxes = this.container.current.childNodes;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = this.getBoxIndex(entry.target);
        console.log(index);
      });
    }, options);

    boxes.forEach((box) => {
      observer.observe(box);
    });
  };

  render() {
    return (
      <div className="App">
        <Background />
        <Navbar ref={this.nav} />
        <NavbarColumn ref={this.navColumn} />
        <div className="container" ref={this.container}>
          <div className="box">
            <Banner />
            <ScrollButton customClickEvent={this.scrollPage} />
          </div>
          <div className="box">
            <h1 className="title">Projects</h1>
            <Cards />
            <ScrollButton
              customClickEvent={this.scrollPage}
              display={"d-none"}
            />
          </div>
          <div className="box">
            <h1 className="title">About</h1>
            <About />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
