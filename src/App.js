import React, { useRef, useState, useEffect } from "react";
import { Colors, Icons } from "./components/Database";

import Navbar from "./components/Navbar";
import NavbarColumn from "./components/NavbarColumn";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Art from "./components/Art";
import About from "./components/About";
import Contact from "./components/Contact";
import Background from "./components/Background";
import ScrollButton from "./components/ScrollButton";
import { Burgir } from "./components/svgs/Burgir";
import { Exit } from "./components/svgs/Exit";

const App = () => {
  const container = useRef();
  const nav = useRef();
  const navColumn = useRef();
  const [width, setWidth] = React.useState(window.innerWidth);
  const [color, setColor] = React.useState("dark");
  const [burgirOpen, setBurgirOpen] = React.useState(false);
  const breakpoint = 992;

  const initialize = () => {
    navColumn.current.style.left = `${-100}px`;
  };

  const colorToggle = (e) => {
    const toggle = e.currentTarget;
    e.currentTarget.classList.add("toggle-transition");

    setTimeout(() => {
      color === "light" ? setColor("dark") : setColor("light");
      toggle.classList.remove("toggle-transition");
      toggle.classList.toggle("on");
    }, 200);
  };

  const colorChange = () => {
    const rootStyle = document.querySelector(":root").style;
    Object.keys(Colors[color]).forEach((key) => {
      rootStyle.setProperty(key, Colors[color][key]);
    });
  };

  useEffect(() => {
    console.log(color);
    colorChange();
  }, [color]);

  useEffect(() => {
    initialize();
    createObserver();
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    nav.current != null && window.addEventListener("scroll", onScroll, true);
  }, [width]);

  const onScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const navHeight = nav.current.offsetHeight;
    const navColumnWidth = navColumn.current.offsetWidth;

    const ratio = (navHeight - scrollY) / navHeight;
    const xColumn = ratio * navColumnWidth;

    // console.log(
    //   "navY: " + ratio + " navHeight: " + navColumnWidth + " Ratio: " + xColumn
    // );

    navbarOpacity(nav.current, ratio);
    navbarMove(navColumn.current, xColumn, ratio);
  };

  const navbarOpacity = (nav, opacity) => {
    nav.style.opacity = opacity;
    opacity <= 0 ? nav.classList.add("v-none") : nav.classList.remove("v-none");
  };

  const navbarMove = (nav, x, ratio) => {
    nav.style.left = ratio >= 0 ? `${-x}px` : "0px";
  };

  const openColumnBar = () => {
    setBurgirOpen(burgirOpen === false);
    navColumn.current.classList.toggle("navEnter");
  };

  const scrollPage = (e) => {
    const currentButton = e.currentTarget;
    const currentBox = currentButton.parentNode;

    const index = getBoxIndex(currentBox);

    const nextBox = currentBox.parentNode.children[index + 1];
    const nextButton = nextBox.querySelector(".btn-scroll");
    // console.log(nextBox);
    // console.log(nextButton);
    currentButton.classList.add("d-none");
    nextButton !== null && nextButton.classList.remove("d-none");
    nextBox.scrollIntoView({
      behavior: "smooth",
    });
    // console.log("index: " + index);
  };

  const scrollTab = (e, index) => {
    e.preventDefault();
    container.current.childNodes[index].scrollIntoView({
      behavior: "smooth",
    });
  };

  const getBoxIndex = (box) => {
    return [...box.parentNode.children].indexOf(box);
  };

  const createObserver = () => {
    const options = {
      root: null,
      rootMargin: "-360px 0px",
    };

    const boxes = container.current.childNodes;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const tabs = navColumn.current.querySelector(".tabs").childNodes;
        const index = getBoxIndex(entry.target);
        tabs[index].classList.toggle("active", entry.isIntersecting);
        container.current.childNodes[index]
          .querySelector(".btn-scroll")
          .classList.toggle("d-none", !entry.isIntersecting);
      });
    }, options);

    boxes.forEach((box) => {
      observer.observe(box);
    });
  };

  const navChoser = () => {
    return width < breakpoint ? (
      burgirOpen ? (
        <Exit className={"burgir"} customClick={openColumnBar} />
      ) : (
        <Burgir customClick={openColumnBar} />
      )
    ) : (
      <Navbar
        ref={nav}
        tabs={tabs}
        customClick={scrollTab}
        colorToggle={colorToggle}
        color={color}
      />
    );
  };

  const tabs = [
    { title: "Intro", component: <Banner icons={Icons} /> },
    { title: "Projects", component: <Cards /> },
    { title: "Art", component: <Art /> },
    { title: "About", component: <About /> },
    { title: "Contact", component: <Contact /> },
  ];

  return (
    <div className="App">
      <Background />
      {navChoser()}
      <NavbarColumn
        ref={navColumn}
        tabs={tabs}
        customClick={scrollTab}
        icons={Icons}
        colorToggle={colorToggle}
        color={color}
      />
      <div className="container" ref={container}>
        {tabs.map((tab, index) => {
          return (
            <div className="box" key={index}>
              <h2 className="title">{tab.title}</h2>
              {tab.component}
              {tabs.length - 1 > index && (
                <ScrollButton customClick={scrollPage} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
