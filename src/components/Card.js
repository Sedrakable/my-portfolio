import React, { Component } from "react";
import Arrow from "./svgs/Arrow";
import { IKImage, IKContext } from "imagekitio-react";

const Card = (props) => {
  return (
    <div className="card">
      <IKContext urlEndpoint="https://ik.imagekit.io/sedrakable">
        <IKImage
          path={`/${props.card.image_title}/${props.card.image_title}_0.${props.card.image_format}`}
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
          {props.card.langs.map((lang) => {
            return <p key={lang[1]}>{lang}</p>;
          })}
        </div>
        <div className="btns">
          {props.card.view != undefined && (
            <a id="left" href={props.card.view} target="_blank">
              Visit
            </a>
          )}

          <Arrow customClick={props.toggle} />
          {props.card.view != undefined && (
            <a id="right" href={props.card.code} target="_blank">
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
