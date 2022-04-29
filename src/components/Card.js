import React from "react";
import Arrow from "./svgs/Arrow";
import CardButtons from "./CardButtons";
import { IKImage, IKContext } from "imagekitio-react";

const Card = (props) => {
  const image_kit_path = (card) => {
    return `/${card.image_title}/${card.image_title}${
      card.images.length > 1 ? "_" + card.images[0] : ""
    }.${card.image_format}`;
  };

  return (
    <div className="card">
      <IKContext urlEndpoint="https://ik.imagekit.io/sedrakable">
        <IKImage
          path={image_kit_path(props.card)}
          transformation={[
            {
              height: "384",
              width: "640",
            },
          ]}
        />
      </IKContext>
      <div className="info">
        <div className="header">
          <h2>{props.card.title}</h2>
        </div>
        <div className="langs">
          {props.card.langs.map((lang, index) => {
            return <p key={index}>{lang}</p>;
          })}
        </div>
        <CardButtons view={props.card.view} code={props.card.code}>
          <Arrow customClick={props.toggle} />
        </CardButtons>
      </div>
    </div>
  );
};

export default Card;
