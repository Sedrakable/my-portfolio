import { createContext } from "react";

export const ModuleContext = createContext({
  cards: [],
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
});
