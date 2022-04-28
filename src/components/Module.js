import React, {
  useRef,
  useState,
  useImperativeHandle,
  useContext,
  forwardRef,
} from "react";
import ReactDOM from "react-dom";
import BigArrow from "./svgs/BigArrow";
import { ModuleContext } from "../store/context";

const Module = forwardRef((props, ref) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [cards, setCards] = useState(props.projectCards);
  const cardCtx = useContext(ModuleContext);

  console.log(cardCtx.isModule);

  const nextCard = () => {
    // setImageIndex(0);
    const currentCardIndex = cardIndex;
    if (currentCardIndex < cards.length - 1) {
      setCardIndex(currentCardIndex + 1);
    } else {
      setCardIndex(0);
    }
  };

  const previousCard = () => {
    // setImageIndex(0);
    const currentCardIndex = cardIndex;
    if (currentCardIndex > 0) {
      setCardIndex(cardIndex - 1);
    } else {
      setCardIndex(cards.length - 1);
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`module ${cardCtx.isModule && "module-enter"}`}
      ref={module}
    >
      <BigArrow customClick={previousCard} />
      {props.children}
      <BigArrow customClick={nextCard} />
      <div
        className="overlay"
        onClick={() => {
          cardCtx.toggleModuleOff();
        }}
      />
    </div>,
    document.getElementById("module-root")
  );
});

export default Module;
