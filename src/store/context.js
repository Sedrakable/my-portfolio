import { createContext } from "react";
import { CardsContent } from "../components/Database";

export const ModuleContext = createContext({
  cards: CardsContent,
  cardIndex: 0,
  isModule: false,
  toggleModuleOn: (e) => {},
  toggleModuleOff: () => {},
  nextCard: () => {},
  previousCard: () => {},
  imageIndex: 0,
  nextImage: () => {},
  previousImage: () => {},
  setImage: (index) => {},
  title: "",
});
