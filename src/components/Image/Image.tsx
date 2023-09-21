import React from "react";
// import styles from "./Image.module.scss";
// import cn from "classnames";
import { IKContext, IKImage } from "imagekitio-react";
import { CardType } from "../Card/Card";

export interface ImageProps {
  card: CardType;
  // fit?: boolean;
  // mobileFit?: boolean;
}
export const Image: React.FC<ImageProps> = ({ card }) => {
  const image_kit_path = (card: CardType) => {
    return `/${card.image_title}/${card.image_title}${
      card.images.length > 1 ? "_" + card.images[0] : ""
    }.${card.image_format}`;
  };

  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/sedrakable">
      <IKImage
        path={image_kit_path(card)}
        transformation={[
          {
            height: "384",
            width: "640",
          },
        ]}
      />
    </IKContext>
  );
  // return fit || mobileFit ? (
  //   <span className={cn(styles.wrapper)}>
  //     <img src={src} alt={alt} className={styles.blured} />
  //     <img src={src} alt={alt} style={{ objectFit: "contain" }} />
  //   </span>
  // ) : (
  //   <img src={src} alt={alt} style={{ objectFit: "cover" }} />
  // );
};
