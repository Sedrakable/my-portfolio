import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Categories } from "./Database";
import { IKImage, IKContext } from "imagekitio-react";

export const Art = forwardRef((props, ref) => {
  const cards = useRef();
  const [categoryIndex, setCategoryIndex] = useState(null);

  const switchCategory = (index) => {
    categoryIndex != index ? setCategoryIndex(index) : setCategoryIndex(null);
  };

  const image_kit_path = (title, art) => {
    return `/${title}/${art.image_title}${
      art.images.length > 1 ? "_" + art.images[0] : ""
    }.${art.image_format}`;
  };

  useImperativeHandle(
    ref,
    () => ({
      getCategoryIndex: () => {
        return categoryIndex;
      },
    }),
    [categoryIndex]
  );

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
        <div className="wrapper">
          <h1>{Categories[categoryIndex].title}</h1>
          <div className="cards" ref={cards}>
            {Categories[categoryIndex].arts.map((art) => {
              return (
                <div
                  className="card-lil"
                  onClick={(e) => {
                    props.cardShow.current.toggleModule(e);
                  }}
                >
                  <IKContext urlEndpoint="https://ik.imagekit.io/sedrakable">
                    <IKImage
                      path={image_kit_path(
                        Categories[categoryIndex].title,
                        art
                      )}
                      transformation={[
                        {
                          height: "384",
                          width: "384",
                        },
                      ]}
                    />
                  </IKContext>
                  <h3>{art.image_title.replace("_", " ")}</h3>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
});

export default Art;
