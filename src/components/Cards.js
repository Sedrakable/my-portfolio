import React, { useContext } from "react";
import { CardsContent } from "./Database";
import { ModuleContext } from "../store/context";

import Card from "./Card";

const Cards = () => {
  const cardCtx = useContext(ModuleContext);
  return (
    <div className="cards">
      {CardsContent.map((card, index) => {
        return (
          <Card
            card={card}
            key={index}
            propKey={index}
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
