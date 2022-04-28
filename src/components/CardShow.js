import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  forwardRef,
} from "react";
import { Exit } from "./svgs/Exit";
import Arrow from "./svgs/Arrow";
import { Marker, VideoMarker } from "./svgs/Marker";
import { IKImage, IKContext } from "imagekitio-react";
import { ModuleContext } from "../store/context";
import Module from "./Module";

const CardShow = forwardRef((props, ref) => {
  const cards = props.cards;
  const cardCtx = useContext(ModuleContext);
  const [imagesStyle, setImagesStyle] = useState({});

  const cardIndex = cardCtx.cardIndex;
  const imageIndex = cardCtx.imageIndex;

  const title = cards[cardIndex].title
    ? cards[cardIndex].title
    : cards[cardIndex].image_title.replace("_", " ");

  const images = useRef();

  const imagesCount =
    cards[cardIndex].images.length + (cards[cardIndex].video ? 1 : 0) - 1;

  const image_kit_path = (card, num) => {
    return `/${card.image_title}/${card.image_title}${
      card.images.length > 1 ? "_" + num : ""
    }.${card.image_format}`;
  };
  useEffect(() => {
    setImagesStyle({
      transform: `translateX(-${images.current.offsetWidth * imageIndex}px)`,
    });
  }, [imageIndex, images]);

  const markerRender = () => {
    return (
      <div className="markers">
        {cards[cardIndex].images.map((_, index) => {
          return (
            <Marker
              customClass={index === imageIndex && "active"}
              key={index}
              customClick={() => cardCtx.setImage(index)}
            />
          );
        })}
        {cards[cardIndex].video && (
          <VideoMarker
            customClass={imagesCount === imageIndex && "active"}
            key={"video"}
            customClick={() => cardCtx.setImage(imagesCount)}
          />
        )}
      </div>
    );
  };

  return (
    <Module>
      <div className={`card card-show ${cardCtx.isModule && "card-enter"}`}>
        <div className="image-wrapper" ref={images}>
          <div className="small-arrows">
            {imageIndex !== 0 && (
              <div
                className={`arrow-wrapper`}
                id="left"
                onClick={() => {
                  cardCtx.previousImage();
                }}
              >
                <Arrow />
              </div>
            )}

            {imageIndex !== imagesCount && (
              <div
                className="arrow-wrapper"
                id="right"
                onClick={() => {
                  cardCtx.nextImage();
                }}
              >
                <Arrow />
              </div>
            )}
          </div>
          {cards[cardIndex].images.length > 1 ? markerRender() : null}
          <div className="images" style={imagesStyle}>
            {cards[cardIndex].images.map((num) => {
              return (
                <IKContext urlEndpoint="https://ik.imagekit.io/sedrakable">
                  <IKImage
                    key={num}
                    path={image_kit_path(cards[cardIndex], num)}
                  />
                </IKContext>
              );
            })}
            {cards[cardIndex].video}
          </div>
        </div>
        <div className="info">
          <div className="header">
            <h2>{title}</h2>
            <Exit customClick={cardCtx.toggleModuleOff} />
          </div>
          {cards[cardIndex].description}
          <div className="langs">
            {cards[cardIndex].langs &&
              cards[cardIndex].langs.map((lang, index) => {
                return <p key={index}>{lang}</p>;
              })}
          </div>

          <div className="btns">
            {cards[cardIndex].view && (
              <a id="left" href={cards[cardIndex].view} target="_blank">
                Visit
              </a>
            )}

            {cards[cardIndex].code && (
              <a id="right" href={cards[cardIndex].code} target="_blank">
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </Module>
  );
});

export default CardShow;
