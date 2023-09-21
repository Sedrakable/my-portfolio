import React from "react";
import { Variants, motion } from "framer-motion";
import { Backdrop } from "./Backdrop";
import styles from "./Modal.module.scss";
import { atom } from "jotai";
import { Splider, SpliderContainerProps } from "../Splider/Splider";
import { Exit } from "../svgs/Exit";
import { useWindowResize } from "../../utils/useWindowResize";
import CardButtons, { CardButtonsProps } from "../Card/CardButtons";
import cn from "classnames";

export interface ModalProps {
  handleClose: () => void;
  splider: SpliderContainerProps;
  title: string;
  description?: JSX.Element;
  langs?: [JSX.Element, string][];
  ctas?: CardButtonsProps;
}

export const modalData = atom<ModalProps | null>(null);

const dropIn: Variants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 100,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const Modal: React.FC<ModalProps> = ({
  splider,
  title,
  ctas,
  description,
  langs,
  handleClose,
}) => {
  const { isMobileOrTablet } = useWindowResize();
  const titleComp = (
    <div className={styles.text}>
      <h2>{title}</h2>
      <Exit customClick={handleClose} customClass={styles.exit} />
    </div>
  );
  const noDetails = !langs && !description;
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={cn(styles.modal, {
          [styles.noDetails]: noDetails,
        })}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {(isMobileOrTablet || noDetails) && titleComp}
        {/* <BigArrow customClick={() => setModalOpen()} /> */}
        <div className={styles.left}>
          <Splider {...splider} />
        </div>

        <div className={styles.right}>
          {!noDetails && !isMobileOrTablet && titleComp}
          {description && (
            <div className={styles.description}>{description}</div>
          )}
          {langs && (
            <div className={styles.langs}>
              {langs.map((lang, index) => {
                return <p key={index}>{lang}</p>;
              })}
            </div>
          )}
          {console.log(ctas)}
          {(ctas?.code || ctas?.view) && <CardButtons {...ctas} />}
        </div>

        {/* <BigArrow customClick={cardCtx.nextCard} /> */}
      </motion.div>
    </Backdrop>
  );
};
