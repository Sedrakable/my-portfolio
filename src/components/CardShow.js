import React, {
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Exit } from "./svgs/Exit";
import BigArrow from "./svgs/BigArrow";
import Arrow from "./svgs/Arrow";
import { Marker, VideoMarker } from "./svgs/Marker";

const CardShow = forwardRef((props, ref) => {
  console.log(props);
  const cards = props.cards;
  const images = useRef();
  const arrows = useRef();
  const markers = useRef();
  const module = useRef();

  const [cardIndex, setCardIndex] = useState(0);
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

  const toggleModule = (e) => {
    console.log(e);
    if (e) setCard(e);
    setImageIndex(0);
    module.current.classList.toggle("module-enter");
    module.current.querySelector(".card-show").classList.toggle("card-enter");
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

  //CARD INDEX
  const setCard = (e) => {
    const btn = e.currentTarget;
    const card = btn.closest(".card");
    const index = [...card.parentNode.children].indexOf(card) - 1;
    setCardIndex(index);
  };

  const nextCard = () => {
    setImageIndex(0);
    const currentCardIndex = cardIndex;
    if (currentCardIndex < cards.length - 1) {
      setCardIndex(currentCardIndex + 1);
    } else {
      setCardIndex(0);
    }
  };

  const previousCard = () => {
    setImageIndex(0);
    const currentCardIndex = cardIndex;
    if (currentCardIndex > 0) {
      setCardIndex(cardIndex - 1);
    } else {
      setCardIndex(cards.length - 1);
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      toggleModule,
    }),
    []
  );

  const markerRender = () => {
    return (
      <div className="markers" ref={markers}>
        {cards[cardIndex].src.map((_, index) => {
          return <Marker key={index} customClick={() => setImage(index)} />;
        })}
        {cards[cardIndex].video && (
          <VideoMarker
            key={"video"}
            customClick={() => setImage(cards[cardIndex].src.length)}
          />
        )}
      </div>
    );
  };

  return (
    <div className="module" ref={module}>
      <BigArrow customClick={previousCard} />
      <div className="card card-show">
        <div className="image-wrapper">
          <div className="small-arrows" ref={arrows}>
            <div className="arrow-wrapper" id="left" onClick={previousImage}>
              <Arrow />
            </div>

            <div className="arrow-wrapper" id="right" onClick={nextImage}>
              <Arrow />
            </div>
          </div>
          {cards[cardIndex].src.length > 1 ? markerRender() : null}
          <div className="images" ref={images}>
            {cards[cardIndex].src.map((src, index) => {
              return <img key={index} src={src} />;
            })}
            {cards[cardIndex].video}
          </div>
        </div>
        <div className="info">
          <div className="header">
            <h2>{cards[cardIndex].title}</h2>
            <Exit customClick={toggleModule} />
          </div>
          {cards[cardIndex].description}
          <div className="langs">
            {cards[cardIndex].langs.map((lang, index) => {
              return <p key={index}>{lang}</p>;
            })}
          </div>

          <div className="btns">
            <a id="left" href={cards[cardIndex].view} target="_blank">
              Visit
            </a>

            <a id="right" href={cards[cardIndex].code} target="_blank">
              Code
            </a>
          </div>
        </div>
      </div>
      <BigArrow customClick={nextCard} />
      <div
        className="overlay"
        onClick={() => {
          toggleModule();
        }}
      ></div>
    </div>
  );
});

export default CardShow;
