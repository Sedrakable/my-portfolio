import React, { useRef, useState, useEffect } from "react";
import { CardsContent } from "./Database";

import Card from "./Card";

const Cards = ({ cardShow }) => {
  return (
    <div className="cards">
      {CardsContent.map((card, index) => {
        return (
          <Card
            card={card}
            key={index}
            toggle={(e) => {
              cardShow.current.toggleModule(e);
            }}
          />
        );
      })}
    </div>
  );
};

export default Cards;
