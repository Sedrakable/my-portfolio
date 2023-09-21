import React, { useState } from "react";
import { ArtCardType, Categories } from "../../Database";
import { useAtom } from "jotai";
import { ModalProps, modalData } from "../Modal/Modal";
import { getCategoryImagesFromFolder } from "../../utils/getImagesFromFolder";

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const image = require("../../assets/art/origami/Turtle_0.jpg");
export const Art = () => {
  const [, setModalOpen] = useAtom<ModalProps>(modalData);
  const [categoryIndex, setCategoryIndex] = useState(null);

  const switchCategory = (index) => {
    categoryIndex != index ? setCategoryIndex(index) : setCategoryIndex(null);
  };

  const category = Categories[categoryIndex];
  return (
    <div className="art">
      <div className="categories">
        {Categories.map((cat, index) => {
          return (
            <div
              key={index}
              className="category"
              onClick={() => switchCategory(index)}
            >
              <div className="box">{cat.svg}</div>
              <h3>{cat.title}</h3>
            </div>
          );
        })}
      </div>
      {categoryIndex != null && (
        <div className="wrapper">
          <h1>{category.title}</h1>
          <div className="cards">
            {category.arts.map((art: ArtCardType, index) => {
              // Use dynamic import to load the image module
              const importedImages = getCategoryImagesFromFolder(
                category.folder,
                art.title,
                art?.multiple ? art?.multiple : false
              );

              const modal: ModalProps = {
                splider: {
                  images: importedImages,
                  hasThumb: art.hasThumb,
                },
                handleClose: () => setModalOpen(null),
                title: art.title,
                description: art.description,
                langs: art.langs,
                ctas: { code: art.code, view: art.view },
              };

              return (
                <div
                  key={index}
                  className="card-lil"
                  onClick={() => setModalOpen(modal)}
                >
                  {importedImages[0] && <img src={importedImages[0]} />}
                  <h3>{art.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Art;
