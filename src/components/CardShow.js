import React, { Component } from "react";
import Exit from "./svgs/Exit";
import ScrollButton from "./ScrollButton";
import BigArrow from "./svgs/BigArrow";

class CardShow extends Component {
  render() {
    return (
      <div
        className="overlay"
        // onClick={() => {
        //   this.props.toggle();
        // }}
      >
        <BigArrow customClickEvent={this.props.previousCard} />
        <div className="card card-show">
          <img key={this.props.card.id} src={this.props.card.src} />
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
