import React from "react";

import Card from "./Card";
import { useAtom } from "jotai";
import { ModalProps, modalData } from "../Modal/Modal";
import { CardType } from "../../Database";
import { getImagesFromFolder } from "../../utils/getImagesFromFolder";

interface CardsGridProps {
  cards: CardType[];
}

export const CardsGrid: React.FC<CardsGridProps> = ({ cards }) => {
  const [, setModalOpen] = useAtom<ModalProps>(modalData);
  return (
    <div className="cards">
      {cards.map((card: CardType, index: number) => {
        const importedImages = getImagesFromFolder(card.folder);
        const modal: ModalProps = {
          splider: {
            images: importedImages,
            hasThumb: card.hasThumb,
          },
          handleClose: () => setModalOpen(null),
          title: card.title,
          description: card.description,
          langs: card.langs,
          ctas: { code: card.code, view: card.view },
        };
        return (
          <Card
            card={modal}
            shortDesc={card.shortDesc}
            key={index}
            toggle={() => setModalOpen(modal)}
          />
        );
      })}
    </div>
  );
};
