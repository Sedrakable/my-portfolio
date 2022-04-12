import React, { Component } from "react";
import Arrow from "./svgs/Arrow";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.card.src[0]} />
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
          <a id="left" href={props.card.view} target="_blank">
            Visit
          </a>
          <Arrow customClick={props.toggle} />
          <a id="right" href={props.card.code} target="_blank">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
