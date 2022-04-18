import React, { useRef, useState, useEffect } from "react";
import { CardsContent } from "./Database";

import Card from "./Card";
import CardShow from "./CardShow";

const Cards = () => {
  const cardShowRef = useRef(null);

  return (
    <div className="cards">
      <CardShow cards={CardsContent} ref={cardShowRef} />
      {CardsContent.map((card, index) => {
        return (
          <Card
            card={card}
            key={index}
            toggle={(e) => {
              cardShowRef.current.toggleModule(e);
            }}
          />
        );
      })}
    </div>
  );
};

export default Cards;
