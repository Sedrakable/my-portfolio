import React, { useEffect, useRef } from "react";
import {
  Options,
  Splide,
  SplideSlide,
  SplideTrack,
} from "@splidejs/react-splide";
import styles from "./Splider.module.scss";
import "@splidejs/react-splide/css/skyblue";

import cn from "classnames";

export interface SpliderContainerProps {
  images: string[];
  hasThumb?: boolean;
  video?: JSX.Element;
}

export const Splider: React.FC<SpliderContainerProps> = ({
  images,
  hasThumb,
}) => {
  // const images = getImagesFromFolder(folder);
  const mainRef = useRef<Splide>(null);
  const thumbsRef = useRef<Splide>(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const mainOptions: Options = {
    type: "loop",
    autoplay: false,
    start: hasThumb ? 1 : 0,
    pagination: true,
    pauseOnHover: true,
    resetProgress: false,
    heightRatio: 9 / 16,
    interval: 5000,
    arrows: images?.length > 1,
  };

  return (
    <div className={cn(styles.wrapper, styles.small)}>
      <Splide
        className={styles.container}
        options={mainOptions}
        hasTrack={false}
        ref={mainRef}
      >
        <SplideTrack className={styles.track}>
          {images?.map((image: string, i: number) => {
            return (
              <SplideSlide key={i}>
                <img src={image} />
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </div>
  );
};
