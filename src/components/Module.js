import React, {
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import ReactDOM from "react-dom";
import BigArrow from "./svgs/BigArrow";

const Module = forwardRef((props, ref) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [cards, setCards] = useState(props.projectCards);
  const [cardsType, setCardsType] = useState("projects");

  const module = useRef();

  const toggleModule = (e) => {
    setImageIndex(0);
    if (e) setCard(e);
    module.current.classList.toggle("module-enter");
    module.current.querySelector(".card-show").classList.toggle("card-enter");
  };

  //CARD INDEX
  const setCard = (e) => {
    const btn = e.currentTarget;
    let card = null;
    if (btn.closest(".card") === null) {
      setCardsType("art");
      setCards(props.artCards);
      card = btn.closest(".card-lil");
    } else {
      setCardsType("projects");
      setCards(props.projectCards);
      card = btn.closest(".card");
    }
    const index = [...card.parentNode.children].indexOf(card);
    setCardIndex(index);
  };

  const nextCard = () => {
    setImageIndex(0);
    const currentCardIndex = cardIndex;
    if (currentCardIndex < cards.length - 1) {
      setCardIndex(currentCardIndex + 1);
    } else {
      setCardIndex(0);
    }
  };

  const previousCard = () => {
    setImageIndex(0);
    const currentCardIndex = cardIndex;
    if (currentCardIndex > 0) {
      setCardIndex(cardIndex - 1);
    } else {
      setCardIndex(cards.length - 1);
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      toggleModule,
    }),
    []
  );

  return ReactDOM.createPortal(
    <div className="module" ref={module}>
      <BigArrow customClick={previousCard} />

      <BigArrow customClick={nextCard} />
      <div
        className="overlay"
        onClick={() => {
          toggleModule();
        }}
      />
    </div>,
    document.getElementById("module-root")
  );
});

export default Module;
