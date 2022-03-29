import React, { Component } from "react";
import Card from "./Card";
import CardShow from "./CardShow";

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
  constructor(props) {
    super(props);
    this.state = { cardIndex: 0 };
    this.setCard = this.setCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.cards = React.createRef();
  }

  setCard = (e) => {
    const btn = e.currentTarget;
    const card = btn.closest(".card");
    const index = [...card.parentNode.children].indexOf(card) - 1;
    this.setState({ cardIndex: index });
  };

  nextCard = () => {
    const currentCardIndex = this.state.cardIndex;
    if (currentCardIndex < this.cards.current.children.length - 2) {
      this.setState({ cardIndex: currentCardIndex + 1 });
    } else {
      this.setState({ cardIndex: 0 });
    }
  };

  previousCard = () => {
    const currentCardIndex = this.state.cardIndex;
    if (currentCardIndex > 0) {
      this.setState({ cardIndex: this.state.cardIndex - 1 });
    } else {
      this.setState({ cardIndex: this.cards.current.children.length - 2 });
    }
  };

  toggleOverlay = (e) => {
    if (e) this.setCard(e);

    const overlay = this.cards.current.querySelector(".overlay");
    overlay.classList.toggle("overlay-enter");
    overlay.querySelector(".card-show").classList.toggle("card-enter");
  };

  render() {
    return (
      <div className="cards" ref={this.cards}>
        <CardShow
          card={cards[this.state.cardIndex]}
          toggle={this.toggleOverlay}
          nextCard={this.nextCard}
          previousCard={this.previousCard}
        />
        {cards.map((card, index) => {
          return <Card card={card} key={index} toggle={this.toggleOverlay} />;
        })}
      </div>
    );
  }
}

export default Cards;
