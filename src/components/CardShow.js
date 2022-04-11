import React, { useRef, useState, useEffect, useImperativeHandle } from "react";
import { Exit } from "./svgs/Exit";
import BigArrow from "./svgs/BigArrow";
import Arrow from "./svgs/Arrow";
import Marker from "./svgs/Marker";

const CardShow = React.forwardRef((props, ref) => {
  const images = useRef();
  const arrows = useRef();
  const markers = useRef();

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    incrementImage();
  }, [imageIndex]);

  const incrementImage = () => {
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

  const resetArrows = () => {
    arrows.current.childNodes[1].classList.remove("v-none");
    arrows.current.childNodes[0].classList.remove("v-none");
  };

  useImperativeHandle(ref, () => ({
    resetImage() {
      setImageIndex(0);
    },
    incrementImage() {
      incrementImage();
    },
  }));

  const markerRender = () => {
    return (
      <div className="markers" ref={markers}>
        {props.card.src.map((_, index) => {
          return <Marker key={index} customClick={() => setImage(index)} />;
        })}
      </div>
    );
  };

  return (
    <div className="overlay">
      <BigArrow customClick={props.previousCard} />
      <div className="card card-show">
        <div className="image-wrapper">
          <div className="small-arrows" ref={arrows}>
            <div className="wrapper" onClick={previousImage}>
              <Arrow />
            </div>

            <div className="wrapper" onClick={nextImage}>
              <Arrow />
            </div>
          </div>
          {props.card.src.length > 1 ? markerRender() : null}
          <div className="images" ref={images}>
            {props.card.src.map((src, index) => {
              return <img key={index} src={src} />;
            })}
          </div>
        </div>
        <div className="info">
          <div className="header">
            <h2>{props.card.title}</h2>
            <Exit customClick={props.toggle} />
          </div>
          <p className="desc">{props.card.description}</p>
          <div className="langs">
            {props.card.langs.map((lang, index) => {
              return <p key={index}>{lang}</p>;
            })}
          </div>

          <div className="btns">
            <a id="left" href={props.card.view} target="_blank">
              Visit
            </a>

            <a id="right" href={props.card.code} target="_blank">
              Code
            </a>
          </div>
        </div>
      </div>
      <BigArrow customClick={props.nextCard} />
    </div>
  );
});

export default CardShow;
