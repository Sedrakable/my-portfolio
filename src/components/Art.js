import React from "react";
import { Categories } from "./Database";

export const Art = ({ props }) => {
  return (
    <div className="art">
      <div className="categories">
        {Categories.map((cat) => {
          return (
            <div className="category">
              <div className="box">{cat[1]}</div>
              <h3>{cat[0]}</h3>
            </div>
          );
        })}
      </div>
      <div className="cards">
        <div className="card-lil"></div>
        <div className="card-lil"></div>
        <div className="card-lil"></div>
        <div className="card-lil"></div>
        <div className="card-lil"></div>
        <div className="card-lil"></div>
        <div className="card-lil"></div>
      </div>
    </div>
  );
};

export default Art;
