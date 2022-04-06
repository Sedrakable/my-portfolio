import React, { useRef, useState, useEffect } from "react";
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

const Cards = (props) => {
  const cards = [
    {
      src: [
        require("../content/projects/waitist.png"),
        require("../content/projects/pets2go.png"),
        require("../content/projects/plazma.jpg"),
      ],
      title: "Waitist",
      description: "Find a waiter or find a restaurant to wait tables.",
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
      src: [require("../content/projects/pets2go.png")],
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
      src: [require("../content/projects/plazma.jpg")],
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
  const [cardIndex, setCardIndex] = useState(0);
  const cardsRef = useRef();
  const cardShowRef = useRef();

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
        card={cards[cardIndex]}
        toggle={toggleOverlay}
        nextCard={nextCard}
        previousCard={previousCard}
        ref={cardShowRef}
      />
      {cards.map((card, index) => {
        return <Card card={card} key={index} toggle={toggleOverlay} />;
      })}
    </div>
  );
};

export default Cards;

// import React, { Component } from "react";
// import Card from "./Card";
// import CardShow from "./CardShow";

// import Rails from "./svgs/Rails";
// import JS from "./svgs/JS";
// import SQL from "./svgs/SQL";
// import SCSS from "./svgs/SCSS";
// import HTML from "./svgs/HTML";
// import Unity from "./svgs/Unity";
// import CSharp from "./svgs/CSharp";
// import Illu from "./svgs/Illu";

// const cards = [
//   {
//     src: [
//       require("../content/projects/waitist.png"),
//       require("../content/projects/pets2go.png"),
//       require("../content/projects/plazma.jpg"),
//     ],
//     title: "Waitist",
//     langs: [
//       [<Rails />, "Ruby on Rails"],
//       [<JS />, "JS"],
//       [<SQL />, "SQL"],
//       [<SCSS />, "SCSS"],
//       [<HTML />, "HTML"],
//     ],
//     view: "http://waitist.click/",
//     code: "https://github.com/gch90/WAITIST",
//   },
//   {
//     src: [require("../content/projects/pets2go.png")],
//     title: "Pets2Go",
//     langs: [
//       [<Rails />, "Ruby on Rails"],
//       [<JS />, "JS"],
//       [<SQL />, "SQL"],
//       [<SCSS />, "SCSS"],
//       [<HTML />, "HTML"],
//     ],
//     view: "https://pets-2-go.herokuapp.com/",
//     code: "https://github.com/MarMcG/pets_2_go",
//   },
//   {
//     src: [require("../content/projects/plazma.jpg")],
//     title: "Plazma Pong",
//     langs: [
//       [<Unity />, "Unity"],
//       [<CSharp />, "C#"],
//       [<Illu />, "Illustrator"],
//     ],
//     view: "https://play.google.com/store/apps/details?id=com.Ree.BallGame",
//     code: "https://github.com/Sedrakable",
//   },
// ];
// class Cards extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { cardIndex: 0 };
//     this.setCard = this.setCard.bind(this);
//     this.nextCard = this.nextCard.bind(this);
//     this.cards = React.createRef();
//     this.cardShowRef = React.createRef();
//   }

//   setCard = (e) => {
//     const btn = e.currentTarget;
//     const card = btn.closest(".card");
//     const index = [...card.parentNode.children].indexOf(card) - 1;
//     this.setState({ cardIndex: index });
//   };

//   nextCard = () => {
//     this.cardShowRef.current.resetImage();
//     const currentCardIndex = this.state.cardIndex;
//     if (currentCardIndex < this.cards.current.children.length - 2) {
//       this.setState({ cardIndex: currentCardIndex + 1 });
//     } else {
//       this.setState({ cardIndex: 0 });
//     }
//   };

//   previousCard = () => {
//     this.cardShowRef.current.resetImage();
//     const currentCardIndex = this.state.cardIndex;
//     if (currentCardIndex > 0) {
//       this.setState({ cardIndex: this.state.cardIndex - 1 });
//     } else {
//       this.setState({ cardIndex: this.cards.current.children.length - 2 });
//     }
//   };

//   toggleOverlay = (e) => {
//     if (e) this.setCard(e);
//     this.cardShowRef.current.resetImage();
//     const overlay = this.cards.current.querySelector(".overlay");
//     overlay.classList.toggle("overlay-enter");
//     overlay.querySelector(".card-show").classList.toggle("card-enter");
//   };

//   render() {
//     return (
//       <div className="cards" ref={this.cards}>
//         <CardShow
//           card={cards[this.state.cardIndex]}
//           toggle={this.toggleOverlay}
//           nextCard={this.nextCard}
//           previousCard={this.previousCard}
//           ref={this.cardShowRef}
//         />
//         {cards.map((card, index) => {
//           return <Card card={card} key={index} toggle={this.toggleOverlay} />;
//         })}
//       </div>
//     );
//   }
// }

// export default Cards;
