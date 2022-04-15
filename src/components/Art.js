import React, { useState, useEffect, useRef } from "react";
import { Categories } from "./Database";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";

export const Art = ({ props }) => {
  const cards = useRef();
  const [categoryIndex, setCategoryIndex] = React.useState(0);

  return (
    <div className="art">
      <div className="categories">
        {Categories.map((cat) => {
          return (
            <div className="category">
              <div className="box">{cat.svg}</div>
              <h3>{cat.title}</h3>
            </div>
          );
        })}
      </div>
      <div className="cards" ref={cards}>
        {Categories[categoryIndex].images.map((image) => {
          return (
            <div className="card-lil">
              <IKContext urlEndpoint="https://ik.imagekit.io/sedrakable">
                <IKImage
                  path="/default-image.jpg"
                  transformation={[
                    {
                      height: "192",
                      width: "192",
                    },
                  ]}
                />
              </IKContext>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Art;
