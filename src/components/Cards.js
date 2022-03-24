import React, { Component } from "react";
import Card from "./Card";

import Rails from "./svgs/Rails";
import JS from "./svgs/JS";
import SQL from "./svgs/SQL";
import SCSS from "./svgs/SCSS";
import HTML from "./svgs/HTML";
import Unity from "./svgs/Unity";
import CSharp from "./svgs/CSharp";
import Illu from "./svgs/Illu";

const cards = [
  {
    src: require("../content/projects/waitist.png"),
    title: "Waitist",
    langs: [
      [<Rails />, "Ruby on Rails"],
      [<JS />, "JS"],
      [<SQL />, "SQL"],
      [<SCSS />, "SCSS"],
      [<HTML />, "HTML"],
    ],
    view: "http://waitist.click/",
    code: "https://github.com/gch90/WAITIST",
  },
  {
    src: require("../content/projects/pets2go.png"),
    title: "Pets2Go",
    langs: [
      [<Rails />, "Ruby on Rails"],
      [<JS />, "JS"],
      [<SQL />, "SQL"],
      [<SCSS />, "SCSS"],
      [<HTML />, "HTML"],
    ],
    view: "https://pets-2-go.herokuapp.com/",
    code: "https://github.com/MarMcG/pets_2_go",
  },
  {
    src: require("../content/projects/plazma.jpg"),
    title: "Plazma Pong",
    langs: [
      [<Unity />, "Unity"],
      [<CSharp />, "C#"],
      [<Illu />, "Illustrator"],
    ],
    view: "https://play.google.com/store/apps/details?id=com.Ree.BallGame",
    code: "https://github.com/Sedrakable",
  },
];
class Cards extends Component {
  render() {
    return (
      <div className="cards">
        {cards.map((card, index) => {
          return (
            <Card
              id={index}
              src={card.src}
              title={card.title}
              langs={card.langs}
              view={card.view}
              code={card.code}
            />
          );
        })}
      </div>
    );
  }
}

export default Cards;
