import React, { FC } from "react";
import Arrow from "../svgs/Arrow";
import CardButtons from "./CardButtons";
import { ModalProps } from "../Modal/Modal";

interface CardProps {
  card: ModalProps;
  shortDesc?: string;
  toggle: () => void;
}

const Card: FC<CardProps> = ({ card, shortDesc, toggle }) => {
  const { title, langs, splider, ctas } = card;
  return (
    <div className="card">
      <button onClick={toggle}>
        <img src={splider.images[0]} />
      </button>
      <div className="info">
        <div className="header">
          <h2>{title}</h2>
        </div>

        {(langs || shortDesc) && (
          <div className="langs">
            {shortDesc && <h3>{shortDesc}</h3>}
            {langs &&
              langs.map((lang, index) => {
                return <p key={index}>{lang}</p>;
              })}
          </div>
        )}
        <CardButtons view={ctas?.view} code={ctas?.code}>
          <Arrow click={toggle} />
        </CardButtons>
      </div>
    </div>
  );
};

export default Card;
