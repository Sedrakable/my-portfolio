import React, { Component } from "react";
import Exit from "./svgs/Exit";
import ScrollButton from "./ScrollButton";
import BigArrow from "./svgs/BigArrow";

class CardShow extends Component {
  constructor(props) {
    super(props);
    this.state = { imageIndex: 0 };
    this.images = React.createRef();
    this.arrows = React.createRef();
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  componentDidMount = () => {
    this.arrowChecker();
  };

  arrowChecker = () => {
    const imagesCount = this.images.current.childNodes.length - 1;
    if (this.state.imageIndex === imagesCount) {
      this.arrows.current.childNodes[1].classList.add("v-none");
    } else if (this.state.imageIndex === 0) {
      this.arrows.current.childNodes[0].classList.add("v-none");
    } else {
      this.arrows.current.childNodes[1].classList.remove("v-none");
      this.arrows.current.childNodes[0].classList.remove("v-none");
    }
  };

  incrementCount = (i) => {
    return { imageIndex: this.state.imageIndex + i };
  };

  incrementImage = (i) => {
    this.setState(this.incrementCount(i), () => {
      console.log(this.state.imageIndex);
      const width = this.images.current.parentNode.offsetWidth;
      this.images.current.style.transform = `translateX(-${
        width * this.state.imageIndex
      }px)`;
      this.arrowChecker();
    });
  };

  nextImage = () => {
    this.incrementImage(1);
  };

  previousImage = () => {
    this.incrementImage(-1);
  };

  render() {
    return (
      <div
        className="overlay overlay-enter"
        // onClick={() => {
        //   this.props.toggle();
        // }}
      >
        <BigArrow customClickEvent={this.props.previousCard} />
        <div className="card card-show card-enter">
          <div className="image-wrapper">
            <div className="small-arrows" ref={this.arrows}>
              <BigArrow customClickEvent={this.previousImage} />
              <BigArrow customClickEvent={this.nextImage} />
            </div>
            <div className="images" ref={this.images}>
              {this.props.card.src.map((src, index) => {
                return <img key={this.props.card.id} src={src} />;
              })}
            </div>
          </div>
          <div className="info">
            <div className="header">
              <h2>{this.props.card.title}</h2>
              <Exit toggle={this.props.toggle} />
            </div>

            <p className="desc">
              lorem ipsum dolor sit amet, consectetur adip. elit, sed do eiusmod
              tempor incididunt ut lab. Lorem ipsum dolor sit amet, consectetur
              adip
            </p>
            <div className="langs">
              {this.props.card.langs.map((lang, index) => {
                return <p key={index}>{lang}</p>;
              })}
            </div>

            <div className="btns">
              <a id="left" href={this.props.card.view} target="_blank">
                Visit
              </a>

              <a id="right" href={this.props.card.code} target="_blank">
                Code
              </a>
            </div>
          </div>
        </div>
        <BigArrow customClickEvent={this.props.nextCard} />
      </div>
    );
  }
}

export default CardShow;
