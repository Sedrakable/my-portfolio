import React, { Component } from "react";
import Arrow from "./svgs/Arrow";

class Card extends Component {
  // open = (e) => {
  //   const btn = e.currentTarget;
  //   const card = btn.closest(".card");
  //   const index = [...card.parentNode.children].indexOf(card) - 1;
  //   console.log(index);
  //   this.props.setCard(index);
  // };

  render() {
    return (
      <div className="card">
        <img key={this.props.key} src={this.props.card.src} />
        <div className="info">
          <div className="header">
            <h2>{this.props.card.title}</h2>
          </div>
          <div className="langs">
            {this.props.card.langs.map((lang, index) => {
              return <p key={index}>{lang}</p>;
            })}
          </div>
          <div className="btns">
            <a id="left" href={this.props.card.view} target="_blank">
              Visit
            </a>
            <Arrow toggle={this.props.toggle} />
            <a id="right" href={this.props.card.code} target="_blank">
              Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
