import React, { useRef, useState, useEffect, useContext } from "react";
import { CardsContent } from "./Database";
import { ModuleContext } from "../store/context";

import Card from "./Card";

const Cards = ({ cardShow }) => {
  const cardCtx = useContext(ModuleContext);
  return (
    <div className="cards">
      {CardsContent.map((card, index) => {
        return (
          <Card
            card={card}
            key={index}
            toggle={(e) => {
              cardCtx.toggleModuleOn(e);
            }}
          />
        );
      })}
    </div>
  );
};

export default Cards;
