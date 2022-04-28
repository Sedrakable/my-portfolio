import React, { useReducer } from "react";
import { ModuleContext } from "./context";
import { CardsContent } from "../components/Database";
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
      cards: CardsContent,
      cardIndex: index,
      imageIndex: 0,
      isModule: true,
    };
  }

  if (action.type === "TOGGLE OFF") {
    console.log("Toggle Off");
    return {
      cards: CardsContent,
      cardIndex: 0,
      imageIndex: 0,
      isModule: false,
    };
  }

  if (action.type === "NEXT CARD") {
    console.log("Next Card");
    console.log(state.cards);
    const cardIndex =
      state.cardIndex < state.cards.length - 1 ? state.cardIndex + 1 : 0;
    return {
      cards: CardsContent,
      cardIndex: cardIndex,
      imageIndex: 0,
      isModule: true,
    };
  }

  if (action.type === "PREVIOUS CARD") {
    console.log("Previous Card");
    const cardIndex =
      state.cardIndex > 0 ? state.cardIndex - 1 : state.cards.length - 1;
    return {
      cards: CardsContent,
      cardIndex: cardIndex,
      imageIndex: 0,
      isModule: true,
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

  const nextCard = () => {
    dispatchCardAction({ type: "NEXT CARD" });
  };

  const previousCard = () => {
    dispatchCardAction({ type: "PREVIOUS CARD" });
  };

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
