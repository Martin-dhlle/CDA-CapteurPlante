import { Context, createContext } from "react";

export interface AppContextInterface {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const AppContext: Context<AppContextInterface> =
  createContext<AppContextInterface>({
    theme: "light",
    toggleTheme: () => {},
  });
