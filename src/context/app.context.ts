import { Context, Dispatch, SetStateAction, createContext } from "react";
import Sensor from "../utils/interfaces/Sensor";

export interface AppContextInterface {
  theme: "light" | "dark";
  toggleTheme: () => void;
  selectedSensor: Sensor | null;
  setSelectedSensor: Dispatch<SetStateAction<Sensor | null>>;
  isSensorLoading: boolean;
  setSensorLoading: Dispatch<SetStateAction<boolean>>;
}

export const AppContext: Context<AppContextInterface> =
  createContext<AppContextInterface>({
    theme: "light",
    toggleTheme: () => {},
    selectedSensor: null,
    setSelectedSensor: () => {},
    isSensorLoading: false,
    setSensorLoading: () => {},
  });
