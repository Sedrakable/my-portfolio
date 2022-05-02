import React, { useReducer } from "react";
import { ModuleContext } from "./context";
import { CardsContent, Categories } from "../components/Database";
const defaultCardState = {
  cards: CardsContent,
  cardIndex: 0,
  imageIndex: 0,
  isModule: false,
  title: "waitist",
};

const moduleReducer = (state, action) => {
  console.log(action.type);
  if (action.type === "TOGGLE ON") {
    const btn = action.event.currentTarget;

    let card;
    let cardsArray;
    let title;
    let index;

    if (btn.closest(".card")) {
      card = btn.closest(".card");
      cardsArray = CardsContent;
      index = [...card.parentNode.children].indexOf(card);
      title = cardsArray[index].image_title;
    } else {
      card = btn.closest(".card-lil");
      cardsArray = Categories[action.categoryIndex].arts;
      index = [...card.parentNode.children].indexOf(card);
      title = Categories[action.categoryIndex].title;
    }

    return {
      cards: cardsArray,
      cardIndex: index,
      imageIndex: 0,
      isModule: true,
      title: title,
    };
  }

  if (action.type === "TOGGLE OFF") {
    return {
      ...state,
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
    return { ...state, imageIndex: imageIndex };
  }

  if (action.type === "PREVIOUS IMAGE") {
    const imageIndex = state.imageIndex - 1;
    return { ...state, imageIndex: imageIndex };
  }

  if (action.type === "SET IMAGE") {
    const imageIndex = action.index;
    return { ...state, imageIndex: imageIndex };
  }

  return defaultCardState;
};

export const ModuleProvider = (props) => {
  const [cardState, dispatchCardAction] = useReducer(
    moduleReducer,
    defaultCardState
  );

  const toggleModuleOn = (e, categoryIndex) => {
    dispatchCardAction({
      type: "TOGGLE ON",
      event: e,
      categoryIndex: categoryIndex,
    });
  };

  const toggleModuleOff = () => {
    dispatchCardAction({ type: "TOGGLE OFF" });
  };

  const nextCard = () => {
    dispatchCardAction({ type: "NEXT CARD" });
  };

  const previousCard = () => {
    dispatchCardAction({ type: "PREVIOUS CARD" });
  };

  const nextImage = () => {
    dispatchCardAction({ type: "NEXT IMAGE" });
  };

  const previousImage = () => {
    dispatchCardAction({ type: "PREVIOUS IMAGE" });
  };

  const setImage = (index) => {
    dispatchCardAction({ type: "SET IMAGE", index: index });
  };

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
    title: cardState.title,
  };

  return (
    <ModuleContext.Provider value={moduleContext}>
      {props.children}
    </ModuleContext.Provider>
  );
};
