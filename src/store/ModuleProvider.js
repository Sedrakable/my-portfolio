import React, { useReducer } from "react";
import { ModuleContext } from "./context";
import { CardsContent } from "../components/Database";
const defaultCardState = {
  cards: [],
  cardIndex: 0,
  imageIndex: 0,
  isModule: false,
};

const incrementImage = (images, imageIndex) => {
  const width = images.parentNode.offsetWidth;
  images.style.transition = "500ms";
  images.style.transform = `translateX(-${width * imageIndex}px)`;
};

const moduleReducer = (state, action) => {
  console.log(action.type);
  if (action.type === "TOGGLE ON") {
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
    return {
      cards: CardsContent,
      cardIndex: 0,
      imageIndex: 0,
      isModule: false,
    };
  }

  if (action.type === "NEXT CARD") {
    const cardIndex =
      state.cardIndex < state.cards.length - 1 ? state.cardIndex + 1 : 0;
    return { ...state, cardIndex: cardIndex, imageIndex: 0 };
  }

  if (action.type === "PREVIOUS CARD") {
    const cardIndex =
      state.cardIndex > 0 ? state.cardIndex - 1 : state.cards.length - 1;
    return { ...state, cardIndex: cardIndex, imageIndex: 0 };
  }

  if (action.type === "NEXT IMAGE") {
    const imageIndex = state.imageIndex + 1;
    incrementImage(action.images, imageIndex);
    return { ...state, imageIndex: imageIndex };
  }

  if (action.type === "PREVIOUS IMAGE") {
    const imageIndex = state.imageIndex - 1;
    incrementImage(action.images, imageIndex);
    return { ...state, imageIndex: imageIndex };
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

  const nextImage = (images) => {
    dispatchCardAction({ type: "NEXT IMAGE", images: images });
  };

  const previousImage = (images) => {
    dispatchCardAction({ type: "PREVIOUS IMAGE", images: images });
  };

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
