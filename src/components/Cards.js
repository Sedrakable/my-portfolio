import React, { useRef, useState, useEffect } from "react";
import { CardsContent } from "./Database";

import Card from "./Card";
import CardShow from "./CardShow";

const Cards = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const cardsRef = useRef();
  const cardShowRef = useRef(null);

  const setCard = (e) => {
    const btn = e.currentTarget;
    const card = btn.closest(".card");
    const index = [...card.parentNode.children].indexOf(card) - 1;
    setCardIndex(index);
  };

  const nextCard = () => {
    cardShowRef.current.resetImage();
    const currentCardIndex = cardIndex;
    if (currentCardIndex < cardsRef.current.children.length - 2) {
      setCardIndex(currentCardIndex + 1);
    } else {
      setCardIndex(0);
    }
  };

  const previousCard = () => {
    cardShowRef.current.resetImage();
    const currentCardIndex = cardIndex;
    if (currentCardIndex > 0) {
      setCardIndex(cardIndex - 1);
    } else {
      setCardIndex(cardsRef.current.childNodes.length - 2);
    }
  };

  const toggleOverlay = (e) => {
    if (e) setCard(e);
    cardShowRef.current.resetImage();
    const overlay = cardsRef.current.querySelector(".overlay");
    overlay.classList.toggle("overlay-enter");
    overlay.querySelector(".card-show").classList.toggle("card-enter");
  };

  useEffect(() => {
    cardShowRef.current.incrementImage();
  }, [cardIndex]);

  return (
    <div className="cards" ref={cardsRef}>
      <CardShow
        card={CardsContent[cardIndex]}
        toggle={toggleOverlay}
        nextCard={nextCard}
        previousCard={previousCard}
        ref={cardShowRef}
      />
      {CardsContent.map((card, index) => {
        return <Card card={card} key={index} toggle={toggleOverlay} />;
      })}
    </div>
  );
};

export default Cards;
