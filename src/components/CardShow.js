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

  const cardIndex = cardCtx.cardIndex;
  const [imageIndex, setImageIndex] = useState(0);

  const title = cards[cardIndex].title
    ? cards[cardIndex].title
    : cards[cardIndex].image_title.replace("_", " ");

  const images = useRef();
  const arrows = useRef();
  const markers = useRef();

  // const image_kit_path = (card, num) => {
  //   return `/${cardsType !== "projects" ? folder : card.image_title}/${
  //     card.image_title
  //   }${card.images.length > 1 ? "_" + num : ""}.${card.image_format}`;
  // };

  const image_kit_path = (card, num) => {
    return `/${card.image_title}/${card.image_title}${
      card.images.length > 1 ? "_" + num : ""
    }.${card.image_format}`;
  };

  useEffect(() => {
    incrementImage();
  }, [imageIndex, cardIndex]);

  useEffect(() => {
    markerChecker();
  }, [cardIndex]);

  const incrementImage = () => {
    console.log(images);
    const width = images.current.parentNode.offsetWidth;
    images.current.style.transition = "500ms";
    images.current.style.transform = `translateX(-${width * imageIndex}px)`;
    arrowChecker();
    markerChecker();
  };

  const nextImage = () => {
    setImageIndex(imageIndex + 1);
  };

  const setImage = (i) => {
    setImageIndex(i);
  };

  const previousImage = () => {
    setImageIndex(imageIndex - 1);
  };

  const arrowChecker = () => {
    const imagesCount = images.current.childNodes.length - 1;
    resetArrows();
    if (imageIndex === imagesCount) {
      arrows.current.childNodes[1].classList.add("v-none");
    } else if (imageIndex === 0) {
      arrows.current.childNodes[0].classList.add("v-none");
    } else {
      resetArrows();
    }

    if (imagesCount === 0) {
      arrows.current.childNodes[0].classList.add("v-none");
      arrows.current.childNodes[1].classList.add("v-none");
    }
  };

  const resetArrows = () => {
    arrows.current.childNodes[1].classList.remove("v-none");
    arrows.current.childNodes[0].classList.remove("v-none");
  };

  const markerChecker = () => {
    if (markers.current !== null) {
      resetMarkers();
      markers.current.childNodes[imageIndex].classList.add("active");
    }
  };

  const resetMarkers = () => {
    markers.current.childNodes.forEach((marker) => {
      marker.classList.remove("active");
    });
  };

  const markerRender = () => {
    return (
      <div className="markers" ref={markers}>
        {cards[cardIndex].images.map((num) => {
          return <Marker key={num} customClick={() => setImage(num)} />;
        })}
        {cards[cardIndex].video && (
          <VideoMarker
            key={"video"}
            customClick={() => setImage(cards[cardIndex].images.length)}
          />
        )}
      </div>
    );
  };

  return (
    <Module>
      <div className={`card card-show ${cardCtx.isModule && "card-enter"}`}>
        <div className="image-wrapper">
          <div className="small-arrows" ref={arrows}>
            <div className="arrow-wrapper" id="left" onClick={previousImage}>
              <Arrow />
            </div>

            <div className="arrow-wrapper" id="right" onClick={nextImage}>
              <Arrow />
            </div>
          </div>
          {cards[cardIndex].images.length > 1 ? markerRender() : null}
          <div className="images" ref={images}>
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
