import { createContext } from "react";

type BgThemeContextType = {
  bgThemeColor: boolean;
  setBgThemeColor: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BgThemeContext = createContext<BgThemeContextType | null>(null);