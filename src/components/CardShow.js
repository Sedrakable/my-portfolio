import React, { Component } from "react";
import Exit from "./svgs/Exit";
import BigArrow from "./svgs/BigArrow";
import Arrow from "./svgs/Arrow";

class CardShow extends Component {
  constructor(props) {
    super(props);
    this.state = { imageIndex: 0 };
    this.images = React.createRef();
    this.arrows = React.createRef();
    this.markers = React.createRef();
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  componentDidMount = () => {
    this.arrowChecker();
    this.markerChecker();
  };

  arrowChecker = () => {
    const imagesCount = this.images.current.childNodes.length - 1;
    this.resetArrows();
    if (this.state.imageIndex === imagesCount) {
      this.arrows.current.childNodes[1].classList.add("v-none");
    } else if (this.state.imageIndex === 0) {
      this.arrows.current.childNodes[0].classList.add("v-none");
    } else {
      this.resetArrows();
    }

    if (imagesCount === 0) {
      this.arrows.current.childNodes[0].classList.add("v-none");
      this.arrows.current.childNodes[1].classList.add("v-none");
    }
  };

  markerChecker = () => {
    this.resetMarkers();
    console.log(this.markers.current.childNodes[this.state.imageIndex]);
    this.markers.current.childNodes[this.state.imageIndex].style.background =
      "white";
  };

  resetMarkers = () => {
    this.markers.current.childNodes.forEach((marker) => {
      marker.style.background = "black";
    });
  };

  resetArrows = () => {
    this.arrows.current.childNodes[1].classList.remove("v-none");
    this.arrows.current.childNodes[0].classList.remove("v-none");
  };

  incrementCount = (i) => {
    return { imageIndex: this.state.imageIndex + i };
  };

  incrementImage = (i) => {
    this.setState(this.incrementCount(i), () => {
      const width = this.images.current.parentNode.offsetWidth;
      this.images.current.style.transition = "500ms";
      this.images.current.style.transform = `translateX(-${
        width * this.state.imageIndex
      }px)`;
      this.arrowChecker();
      this.markerChecker();
    });
  };

  nextImage = () => {
    this.incrementImage(1);
  };

  previousImage = () => {
    this.incrementImage(-1);
  };

  resetImage = () => {
    this.setState({ imageIndex: 0 }, () => {
      this.images.current.style.transition = "0s";
      this.images.current.style.transform = "translateX(0px)";

      this.arrowChecker();
    });
  };

  render() {
    const markerRender = () => {
      return (
        <div className="markers" ref={this.markers}>
          {this.props.card.src.map(() => {
            return <div className="marker"></div>;
          })}
        </div>
      );
    };
    return (
      <div className="overlay overlay-enter">
        <BigArrow customClickEvent={this.props.previousCard} />
        <div className="card card-show card-enter">
          <div className="image-wrapper">
            <div className="small-arrows" ref={this.arrows}>
              <div className="wrapper">
                <Arrow customClickEvent={this.previousImage} />
              </div>

              <div className="wrapper">
                <Arrow customClickEvent={this.nextImage} />
              </div>
            </div>
            {this.props.card.src.length > 1 ? markerRender() : null}
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
