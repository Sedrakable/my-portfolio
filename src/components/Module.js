import React, { useContext } from "react";
import ReactDOM from "react-dom";
import BigArrow from "./svgs/BigArrow";
import { ModuleContext } from "../store/context";

const Module = (props) => {
  const cardCtx = useContext(ModuleContext);

  return ReactDOM.createPortal(
    <div className={`module ${cardCtx.isModule && "module-enter"}`}>
      <BigArrow customClick={cardCtx.previousCard} />
      {props.children}
      <BigArrow customClick={cardCtx.nextCard} />
      <div
        className="overlay"
        onClick={() => {
          cardCtx.toggleModuleOff();
        }}
      />
    </div>,
    document.getElementById("module-root")
  );
};

export default Module;
