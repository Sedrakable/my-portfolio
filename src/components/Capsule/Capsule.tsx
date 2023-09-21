import React, { FC, useEffect } from "react";
import { Sun, Moon } from "../svgs/WeatherLogos";
import styles from "./Capsule.module.scss";
import { Colors } from "../../Database";
import { atom, useAtom } from "jotai";

export const capsuleData = atom<string>("dark");

export const Capsule: FC = () => {
  const [color, setColor] = useAtom(capsuleData);
  const colorToggle = (e: React.MouseEvent) => {
    console.log("ree");
    const toggle = e.currentTarget;
    e.currentTarget.classList.add("toggle-transition");

    setTimeout(() => {
      color === "light" ? setColor("dark") : setColor("light");
      toggle.classList.remove("toggle-transition");
      toggle.classList.toggle("on");
    }, 200);
  };

  const colorChange = () => {
    const rootStyle = (document?.querySelector(":root") as HTMLElement)?.style;
    Object.keys(Colors[color]).forEach((key) => {
      rootStyle.setProperty(key, Colors[color][key]);
    });
  };

  useEffect(() => {
    colorChange();
  }, [color]);

  return (
    <div className={styles.capsule} onClick={(e) => colorToggle(e)}>
      <div className={styles.toggle}></div>
      {color !== "dark" ? <Sun /> : <Moon />}
    </div>
  );
};
