import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  forwardRef,
} from "react";
import { Exit } from "./svgs/Exit";
import Arrow from "./svgs/Arrow";
import CardButtons from "./CardButtons";
import { Marker, VideoMarker } from "./svgs/Marker";
import { IKImage, IKContext } from "imagekitio-react";
import { ModuleContext } from "../store/context";
import Module from "./Module";

const CardShow = (props) => {
  // Getting cards from props
  const cards = props.cards;

  // Getting context from module context and extracting appropriate variables
  const cardCtx = useContext(ModuleContext);
  const cardIndex = cardCtx.cardIndex;
  const imageIndex = cardCtx.imageIndex;

  // Creating state for styling the images, basically changing the translateX on the carousel
  const [imagesStyle, setImagesStyle] = useState({});

  //Images Ref, className="images wrapper"
  const images = useRef();

  // Creating use effect so that the sate change hapens only hapens after element is rendered, imageIndex is chnaged or images ref changes
  useEffect(() => {
    setImagesStyle({
      transform: `translateX(-${images.current.offsetWidth * imageIndex}px)`,
    });
  }, [imageIndex, images]);

  // Getting Title depending on card, if it had a title key or not
  const title = cards[cardIndex].title
    ? cards[cardIndex].title
    : cards[cardIndex].image_title.replace("_", " ");

  // Getting amount of elements in image wrapper including video for indexing(-1)
  const imagesCount =
    cards[cardIndex].images.length + (cards[cardIndex].video ? 1 : 0) - 1;

  // Getting image kit path for card images
  const image_kit_path = (card, num) => {
    return `/${cardCtx.title}/${card.image_title}${
      card.images.length > 1 ? "_" + num : ""
    }.${card.image_format}`;
  };

  // Rendering image marker(s) and video marker and adding custom clicks to chnage images
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
                <IKContext
                  key={num}
                  urlEndpoint="https://ik.imagekit.io/sedrakable"
                >
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

          <CardButtons
            view={cards[cardIndex].view}
            code={cards[cardIndex].code}
          />
        </div>
      </div>
    </Module>
  );
};

export default CardShow;
