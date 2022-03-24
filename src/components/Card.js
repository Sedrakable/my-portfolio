import React, { Component } from "react";
import Arrow from "./svgs/Arrow";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img key={this.props.id} src={this.props.src} />
        <div className="info">
          <h2>{this.props.title}</h2>
          <div className="langs">
            {this.props.langs.map((lang, index) => {
              return <p key={index}>{lang}</p>;
            })}
          </div>
          <div className="btns">
            <a id="left" href={this.props.view} target="_blank">
              Visit
            </a>
            <Arrow />
            <a id="right" href={this.props.code} target="_blank">
              Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
