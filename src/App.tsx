import React, { useRef, useState, useEffect } from "react";
import { Icons } from "./Database";

import { Navbar } from "./components/Navbar";
import { NavbarColumn } from "./components/NavbarColumn";
import Banner from "./components/Banner";
import { CardsGrid } from "./components/Card/CardsGrid";
import Art from "./components/Art/Art";
import About from "./components/About";
import Contact from "./components/Contact";
import Background from "./components/Background";
import { ScrollButton } from "./components/ScrollButton";
import { Burgir } from "./components/svgs/Burgir";
import { Exit } from "./components/svgs/Exit";
import { projectContent, kickContent } from "./Database";
import { Modal, modalData } from "./components/Modal/Modal";
import { useAtom } from "jotai";

const App = () => {
  const [modalOpen] = useAtom(modalData);
  const container = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLElement>(null);
  const navColumn = useRef<HTMLElement>(null);
  const [width, setWidth] = useState(window.innerWidth);

  const [burgirOpen, setBurgirOpen] = useState(false);

  const breakpoint = 992;

  const initialize = () => {
    if (navColumn && navColumn.current) {
      (navColumn.current as HTMLElement).style.left = `${-100}px`;
    }
  };

  useEffect(() => {
    initialize();
    createObserver();
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    nav.current != null && window.addEventListener("scroll", onScroll, true);
  }, [width]);

  const onScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const navHeight = (nav.current! as HTMLElement).offsetHeight;
    const navColumnWidth = (nav.current! as HTMLElement).offsetWidth;

    const ratio = (navHeight - scrollY) / navHeight;
    const xColumn = ratio * navColumnWidth;

    // console.log(
    //   "navY: " + ratio + " navHeight: " + navColumnWidth + " Ratio: " + xColumn
    // );

    navbarOpacity(nav.current!, ratio);
    navbarMove(navColumn.current!, xColumn, ratio);
  };

  const navbarOpacity = (nav: HTMLElement, opacity: number): void => {
    (nav as HTMLElement)!.style.opacity = opacity.toString();
    opacity <= 0 ? nav.classList.add("v-none") : nav.classList.remove("v-none");
  };

  const navbarMove = (nav: HTMLElement, x: number, ratio: number) => {
    nav.style.left = ratio >= 0 ? `${-x}px` : "0px";
  };

  const openColumnBar = () => {
    setBurgirOpen(burgirOpen === false);
    (navColumn.current! as HTMLElement).classList.toggle("navEnter");
  };

  const scrollPage = (e: Event) => {
    const currentButton = e.currentTarget as HTMLButtonElement;
    const currentBox = currentButton.parentNode as HTMLDivElement;

    const index = getBoxIndex(currentBox);

    const nextBox = currentBox.parentNode?.children[
      index + 1
    ] as HTMLDivElement;

    const nextButton = nextBox.querySelector(
      ".btn-scroll"
    ) as HTMLButtonElement;
    currentButton.classList.add("d-none");
    nextButton !== null && nextButton.classList.remove("d-none");
    nextBox.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollTab = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    (container.current! as HTMLElement).children[index].scrollIntoView({
      behavior: "smooth",
    });
  };

  const getBoxIndex = (box: HTMLDivElement) => {
    return Array.from(box.parentNode?.children || []).indexOf(box);
  };

  const createObserver = (): void => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-360px 0px",
    };

    const boxes: NodeListOf<ChildNode> = (container?.current as HTMLElement)
      .childNodes;

    const observer: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          const tabs = (navColumn.current as HTMLElement)?.querySelector(
            ".tabs"
          )?.children;
          const index: number = getBoxIndex(entry?.target as HTMLDivElement);
          (tabs![index] as HTMLElement)?.classList?.toggle(
            "active",
            entry.isIntersecting
          );

          const scrollBtn: HTMLElement | null = ((container.current as HTMLElement)
            .childNodes[index]! as HTMLElement).querySelector(".btn-scroll")!;

          scrollBtn &&
            scrollBtn.classList.toggle("d-none", !entry.isIntersecting);
        });
      },
      options
    );

    boxes.forEach((box: ChildNode) => {
      observer.observe(box as HTMLElement);
    });
  };

  const navChoser = () => {
    return width < breakpoint ? (
      burgirOpen ? (
        <Exit customClass={"burgir"} customClick={openColumnBar} />
      ) : (
        <Burgir customClick={openColumnBar} />
      )
    ) : (
      <Navbar ref={nav} tabs={tabs} customClick={scrollTab} />
    );
  };

  const tabs = [
    { title: "Intro", component: <Banner icons={Icons} /> },
    { title: "Kickstarters", component: <CardsGrid cards={kickContent} big /> },
    { title: "Projects", component: <CardsGrid cards={projectContent} /> },
    { title: "Art", component: <Art /> },
    { title: "About", component: <About /> },
    { title: "Contact", component: <Contact /> },
  ];

  return (
    <div className="App">
      <Background glowOn={!modalOpen} />
      {!!modalOpen && <Modal {...modalOpen} />}
      {navChoser()}
      <NavbarColumn
        ref={navColumn}
        tabs={tabs}
        customClick={scrollTab}
        icons={Icons}
      />
      <div className="containerApp" ref={container}>
        {tabs.map((tab, index) => {
          return (
            <div className="box" key={index}>
              <h2 className="title">{tab.title}</h2>
              {tab.component}
              {tabs.length - 1 > index && (
                <ScrollButton customClick={() => scrollPage} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
