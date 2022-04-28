import React, { useReducer } from "react";
import { ModuleContext } from "./context";

const defaultCardState = {
  cards: [],
  cardIndex: 0,
  imageIndex: 0,
  isModule: false,
};

const moduleReducer = (state, action) => {
  if (action.type === "TOGGLE ON") {
    console.log("Toggle On");
    const btn = action.event.currentTarget;
    const card = btn.closest(".card");
    const index = [...card.parentNode.children].indexOf(card);
    return {
      cardIndex: index,
      imageIndex: 0,
      isModule: true,
    };
  }

  if (action.type === "TOGGLE OFF") {
    console.log("Toggle Off");
    return {
      cardIndex: 0,
      imageIndex: 0,
      isModule: false,
    };
  }

  return defaultCardState;
};

export const ModuleProvider = (props) => {
  const [cardState, dispatchCardAction] = useReducer(
    moduleReducer,
    defaultCardState
  );

  const toggleModuleOn = (e) => {
    dispatchCardAction({ type: "TOGGLE ON", event: e });
  };

  const toggleModuleOff = (e) => {
    dispatchCardAction({ type: "TOGGLE OFF" });
  };

  const nextCard = () => {};

  const previousCard = () => {};

  const nextImage = () => {};

  const previousImage = () => {};

  const setImage = () => {};

  const moduleContext = {
    cards: cardState.cards,
    cardIndex: cardState.cardIndex,
    isModule: cardState.isModule,
    toggleModuleOn: toggleModuleOn,
    toggleModuleOff: toggleModuleOff,
    nextCard: nextCard,
    previousCard: previousCard,
    imageIndex: cardState.imageIndex,
    nextImage: nextImage,
    previousImage: previousImage,
    setImage: setImage,
  };

  return (
    <ModuleContext.Provider value={moduleContext}>
      {props.children}
    </ModuleContext.Provider>
  );
};
