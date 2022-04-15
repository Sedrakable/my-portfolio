import React, { useState, useEffect, useRef } from "react";
import { Categories } from "./Database";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";

export const Art = ({ props }) => {
  const cards = useRef();
  const [categoryIndex, setCategoryIndex] = React.useState(null);

  const switchCategory = (index) => {
    categoryIndex != index ? setCategoryIndex(index) : setCategoryIndex(null);
  };

  return (
    <div className="art">
      <div className="categories">
        {Categories.map((cat, index) => {
          return (
            <div className="category" onClick={() => switchCategory(index)}>
              <div className="box">{cat.svg}</div>
              <h3>{cat.title}</h3>
            </div>
          );
        })}
      </div>
      {categoryIndex != null && (
        <div className="cards" ref={cards}>
          {Categories[categoryIndex].images.map((image) => {
            return (
              <div className="card-lil">
                <IKContext urlEndpoint="https://ik.imagekit.io/sedrakable">
                  <IKImage
                    path={`/${Categories[categoryIndex].title}/${image}.jpg`}
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
      )}
    </div>
  );
};

export default Art;
