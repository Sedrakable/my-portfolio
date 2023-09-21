import React from "react";
import styles from "./CardButtons.module.scss";

export interface CardButtonsProps {
  view?: string;
  code?: string;
  children?: JSX.Element;
}
const CardButtons: React.FC<CardButtonsProps> = (props) => {
  return (
    <div className={styles.btns}>
      {props.view && (
        <a className={styles.left} href={props.view} target="_blank">
          Visit
        </a>
      )}
      {props.children}
      {props.code && (
        <a className={styles.right} href={props.code} target="_blank">
          Code
        </a>
      )}
    </div>
  );
};

export default CardButtons;
